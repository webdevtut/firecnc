import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router, private platform: Platform) {
    this.initializeApp()
  }

  initializeApp () {
    this.platform.ready().then(async () => {
     await SplashScreen.hide();
    })
  }
  onLogout(){
    this.auth.logout();
    this.router.navigateByUrl('/auth');
  }
}
