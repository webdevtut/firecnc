import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places : Place[] = [
    new Place('1', 'Juhu Villa', 'In the heart of Mumbai City', 'https://www.narains.com/resources/upload/project_images/11eabac19194ebd6829d8c8dada6263a.jpg',2000),
    new Place('2', 'Versova Bungalow', 'Cozy Family Vacation Home', 'https://content.jdmagicbox.com/comp/mumbai/c5/022pxx22.xx22.220601124333.x8c5/catalogue/silver-waves-farm-boisar-palghar-farm-house-on-hire-ji12tvvg1o.jpg', 2500),
    new Place('3', 'Madh Beach House', 'Not your typical Beach House', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1', 3000),
    new Place('3', 'Madh Beach House', 'Not your typical Beach House', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1', 3000),
    new Place('3', 'Madh Beach House', 'Not your typical Beach House', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1', 3000),
    new Place('3', 'Madh Beach House', 'Not your typical Beach House', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1', 3000),
    new Place('3', 'Madh Beach House', 'Not your typical Beach House', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1', 3000),
    new Place('3', 'Madh Beach House', 'Not your typical Beach House', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1', 3000),
    new Place('3', 'Madh Beach House', 'Not your typical Beach House', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1', 3000),
    new Place('3', 'Madh Beach House', 'Not your typical Beach House', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/251732450.jpg?k=c291e2faa860f79f1a2f81766e5d518ab05bc27f0e421b7d5e1ec6f4e1dd7b54&o=&hp=1', 3000),
  ];

  getplaces() {
    return [...this._places];
  }

  getplace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
