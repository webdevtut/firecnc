import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, from, map, tap } from 'rxjs';
import { User } from './user.model';
import { Preferences } from '@capacitor/preferences';;

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId:string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = new BehaviorSubject<User>(null);

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map((user) => {
        if (user) {
          return !!user;
        } else {
          return false;
        }
      })
    );
  }
  get userId() {
    return this._user.asObservable().pipe(
      map((user) => {
        if (user) {
          return user.id;
        } else {
          return null;
        }
      })
    );
  }
  constructor(private http: HttpClient) {}

  autoLogin() {
    return from(Preferences.get({ key: 'authData' })).pipe(
      map((storedData) => {
        if (!storedData || !storedData.value) {
          return null;
        }
        const parsedData = JSON.parse(storedData.value) as {
          token: string;
          tokenExpirationDate: string;
          userId: string;
          email: string;
        };
        const expirationTime = new Date(parsedData.tokenExpirationDate);
        if(expirationTime <= new Date()){
          return null;
        }
        const user = new User(
          parsedData.userId,
          parsedData.email,
          parsedData.token,
          expirationTime
        );
        return user;
      }), tap(user => {
        if(user) {
          this._user.next(user);
        }
      }), map(user => {
        return !!user;
      })
    );
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  logout() {
    this._user.next(null);
  }

  private setUserData(userData: AuthResponseData) {
    const expTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
    this._user.next(
      new User(userData.localId, userData.email, userData.idToken, expTime)
    );
    this.storeAuthData(
      userData.localId,
      userData.idToken,
      expTime.toISOString(),
      userData.email
    );
  }

  private storeAuthData(
    userId: string,
    token: string,
    tokenExpirationDate: string,
    email: string
  ) {
    Preferences.set({
      key: 'authData',
      value: JSON.stringify({
        userId: userId,
        token: token,
        tokenExpirationDate: tokenExpirationDate,
        email: email
      }),
    });
  }
}
