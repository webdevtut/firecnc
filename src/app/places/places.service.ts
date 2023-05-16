import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, delay, map, switchMap, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: 'Your next home near international airport';
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  private _places = new BehaviorSubject<Place[]>([]);

  get places() {
    return this._places.asObservable();
  }

  fetchPlaces() {
    return this.http
      .get<{ [key: string]: PlaceData }>(
        'https://ionic-angular-backend-66c35-default-rtdb.asia-southeast1.firebasedatabase.app/offered-places.json'
      )
      .pipe(
        map((resData) => {
          const places = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              places.push(
                new Place(
                  key,
                  resData[key].title,
                  resData[key].description,
                  resData[key].imageUrl,
                  resData[key].price,
                  new Date(resData[key].availableFrom),
                  new Date(resData[key].availableTo),
                  resData[key].userId
                )
              );
            }
          }
          return places;
        }),
        tap((places) => {
          this._places.next(places);
        })
      );
  }

  getplace(id: string) {
    return this._places.pipe(
      take(1),
      map((places) => {
        return { ...places.find((p) => p.id === id) };
      })
    );
  }

  addplaces(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    let generatedId : string;
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.http.post<{name: string}>(
      'https://ionic-angular-backend-66c35-default-rtdb.asia-southeast1.firebasedatabase.app/offered-places.json',
      { ...newPlace, id: null }
    ).pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.places;
      }),
      take(1),
      tap((places) => {
        newPlace.id = generatedId;
      this._places.next(places.concat(newPlace));
      })
    );
    // return this._places.pipe(
    //   take(1),
    //   delay(1000),
    //   tap((places) => {
    //     this._places.next(places.concat(newPlace));
    //   })
    // );
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap((places) => {
        const updatedPlaceIndex = places.findIndex((pl) => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );
        this._places.next(updatedPlaces);
      })
    );
  }
}
