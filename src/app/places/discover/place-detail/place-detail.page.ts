import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { Subscription, switchMap, take } from 'rxjs';
import { BookingService } from '../../../bookings/booking.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  isBookable: Boolean = false;
  isLoading: Boolean = false;
  private placeSub : Subscription;
  constructor(
    private router: Router,
    private navctrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private actionsheetCtrl: ActionSheetController,
    private bookingService : BookingService,
    private loaderCtrl: LoadingController,
    private auth: AuthService,
    private alert: AlertController
  ) {}
  
  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navctrl.navigateBack('/places/tabs/offers');
        return;
      }
      let fetchedUserId: string;
      this.auth.userId.pipe(
        take(1),
        switchMap(userId => {
        if(!userId) {
          throw new Error('Found no user!');
        }
        fetchedUserId = userId;
        return this.placesService.getplace(paramMap.get('placeId'))
      })).subscribe(place => {
        this.isLoading = false;
        this.place = place;
        this.isBookable = place.userId !== fetchedUserId;
      },
      (error) => {
        this.alert.create({
          header: 'An Error occured!',
          message: 'Place could not be fetched. Please try again later',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                this.router.navigate(['/places/tabs/discover']);
              },
            },
          ],
        }).then(alertEl => {
          alertEl.present();
        })
      });
    });
  }
  
  ngOnDestroy() {
    if(this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navctrl.navigateBack('/places/tabs/discover');
    // this.navctrl.pop();
    this.actionsheetCtrl
      .create({
        header: 'Choose an Action',
        buttons: [
          {
            text: 'Select Date',
            handler: () => {
              this.openBookingModal('select');
            },
          },
          {
            text: 'Random Date',
            handler: () => {
              this.openBookingModal('random');
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
          },
        ],
      })
      .then((acttionSheetEl) => {
        acttionSheetEl.present();
      });
  }

  openBookingModal(mode: 'select' | 'random') {
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place, selectedMode: mode },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        if (resultData.role === 'confirm') {
         this.loaderCtrl.create({
          message: 'Creating Booking...'
         }).then(loadingEl => {
          loadingEl.present();
          const data = resultData.data.bookingData;
          this.bookingService.addBooking(
            this.place.id,
            this.place.title,
            this.place.imageUrl,
            data.firstName,
            data.lastName,
            data.guestNumber,
            data.startDate,
            data.endDate
          ).subscribe(() => {
           loadingEl.dismiss();
          });
         })
        }
      });
  }
}
