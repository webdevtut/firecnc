import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[]= [
    {
      id:'1',
      placeId: '1',
      placeTitle: 'Juhu Villa',
      guestnumber: 2,
      userId: 'abc'
    }
  ];

  get bookings() {
    return [... this._bookings]
  }

  constructor() { }
}
