import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private vplaces: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York city',
      'https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      149.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      149.99
    ),
  ];

  get places() {
    return [...this.vplaces];
  }

  getPlace(id: string) {
    return {...this.vplaces.find(p => p.id === id)};
  }
  constructor() {}
}
