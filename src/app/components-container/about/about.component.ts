import { Component } from '@angular/core';
import { Frames } from '../Interface/frames';
import { ServiceCartService } from '../Services/service-cart.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  arr:Frames[] = [];
  constructor(private service: ServiceCartService) {
    this.arr = service.cartedItems();
  }
  ngOnInit(): void {
    this.arr = this.service.cartedItems();
    console.log(this.arr);
  }
}
