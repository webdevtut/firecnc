import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private authSub: Subscription;
  private prevAuthState = false;
  constructor(private auth: AuthService, private router: Router, private platform: Platform) {
    this.initializeApp()
  }
  
  
  ngOnInit() {
    this.authSub = this.auth.userIsAuthenticated.subscribe(isAuth => {
      if(!isAuth && this.prevAuthState !== isAuth){
        this.router.navigateByUrl('auth');
      }
      this.prevAuthState = isAuth;
    })
  }
  
  ngOnDestroy() {
    if(this.authSub) {
      this.authSub.unsubscribe();
    }
  }
  initializeApp () {
    this.platform.ready().then(async () => {
     await SplashScreen.hide();
    })
  }
  onLogout(){
    this.auth.logout();
  }
}
