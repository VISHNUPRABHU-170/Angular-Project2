import { Injectable } from '@angular/core';
import { Frames } from '../Interface/frames';

@Injectable({
  providedIn: 'root'
})
export class ServiceCartService {
  arr:Frames[] = [];
  constructor() { }
  cartItem(items: Frames[]) {
    this.arr = items;
  }
  cartedItems() {
    return this.arr;
  }
}
