import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from '../../places.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  constructor(
    private placeService: PlacesService,
    private Router: Router,
    private loaderCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)],
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      image: new FormControl(null),
    });
  }

  onCreateOffer() {
    if (this.form.invalid || !this.form.get('image').value) {
      return;
    }

    this.loaderCtrl
      .create({
        message: 'Creating place..',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.placeService
          .uploadImage(this.form.get('image').value)
          .pipe(
            switchMap(uploadRes => {
              return this.placeService.addplaces(
                this.form.value.title,
                this.form.value.description,
                +this.form.value.price,
                new Date(this.form.value.dateFrom),
                new Date(this.form.value.dateTo),
                uploadRes
              );
            })
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.Router.navigate(['/places/tabs/offers']);
          });
      });
  }


  onImagePicked(imgData) {
    this.form.patchValue({ image: imgData });
  }
}
