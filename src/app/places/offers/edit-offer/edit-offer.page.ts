import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place: Place;
  form: FormGroup;
  isLoading: Boolean = false;
  private placeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private loaderCtrl: LoadingController,
    private router: Router,
    private alert: AlertController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/offers');
        return;
      }
      this.isLoading = true;
      this.placesService.getplace(paramMap.get('placeId')).subscribe(
        (place) => {
          this.place = place;
          this.form = new FormGroup({
            title: new FormControl(this.place.title, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            description: new FormControl(this.place.description, {
              updateOn: 'blur',
              validators: [Validators.required, Validators.maxLength(180)],
            }),
          });
          this.isLoading = false;
        },
        (error) => {
          this.alert.create({
            header: 'An Error occured!',
            message: 'Place could not be fetched. Please try again later',
            buttons: [
              {
                text: 'Okay',
                handler: () => {
                  this.router.navigate(['/places/tabs/offers']);
                },
              },
            ],
          }).then(alertEl => {
            alertEl.present();
          })
        }
      );
    });
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
 
  onUpdateOffer() {
    if (this.form.invalid) {
      return;
    }
    this.loaderCtrl
      .create({
        message: 'Updating Place...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.placesService
          .updatePlace(
            this.place.id,
            this.form.value.title,
            this.form.value.description
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(['/places/tabs/offers']);
          });
      });
  }
}
