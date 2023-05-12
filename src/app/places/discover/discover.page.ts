import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { InfiniteScrollCustomEvent, SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placeService : PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.getplaces();
  }

  onIonInfinite(ev) {
    let arr = Array(50).fill(new Place('1', 'Juhu Villa', 'In the heart of Mumbai City', 'https://www.narains.com/resources/upload/project_images/11eabac19194ebd6829d8c8dada6263a.jpg',2000))
   
   arr.forEach(element => {
     this.loadedPlaces.push(element);
   });
   
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  onFilterUpdate(event: any){
    console.log(event.detail);
  }

}
