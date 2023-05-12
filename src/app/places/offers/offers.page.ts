import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { IonItemSliding, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private router: Router
  ) {}

  ngOnInit() {
    this.offers = this.placesService.getplaces();
  }

  openMenu() {
    this.menuCtrl.toggle();
  }

  onEdit(offerid: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(offerid);
    this.router.navigate(['/','places','tabs','offers', 'edit', offerid])
  }
}
