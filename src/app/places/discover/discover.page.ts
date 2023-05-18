import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { InfiniteScrollCustomEvent, SegmentChangeEventDetail } from '@ionic/angular';
import { Subscription, take } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  relevantPlaces: Place[];
  isLoading: Boolean = false;

  private placesSub: Subscription;

  constructor(
    private placeService: PlacesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.placesSub = this.placeService.places.subscribe((places) => {
      this.loadedPlaces = places;
      this.relevantPlaces = this.loadedPlaces;
    });
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.placeService.fetchPlaces().subscribe(() => {
      this.isLoading = false;
    });
  }

  onIonInfinite(ev) {
    let arr = Array(50).fill(
      new Place(
        '1',
        'Juhu Villa',
        'In the heart of Mumbai City',
        'https://www.narains.com/resources/upload/project_images/11eabac19194ebd6829d8c8dada6263a.jpg',
        2000,
        new Date('2023-01-01'),
        new Date('2023-12-31'),
        'abc'
      )
    );

    arr.forEach((element) => {
      this.loadedPlaces.push(element);
    });

    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  onFilterUpdate(event: any) {
    this.authService.userId.pipe(take(1)).subscribe((userId) => {
      if (event.detail.value === 'all') {
        this.relevantPlaces = this.loadedPlaces;
      } else {
        this.relevantPlaces = this.loadedPlaces.filter(
          (place) => place.userId !== userId
        );
      }
    });
  }
}
