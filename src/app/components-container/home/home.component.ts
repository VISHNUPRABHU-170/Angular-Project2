import { Component } from '@angular/core';
import { Frames } from '../Interface/frames';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items:Frames[] = [];
  constructor() {
    this.items.push({name: "Cp Plus Ip demo Camera", link: "https://4.imimg.com/data4/TV/CX/MY-12278352/cctv-camera-office.jpg"});
    this.items.push({name: "Printer", link: "https://4.imimg.com/data4/GL/UP/MY-5812789/3-printer.jpg"});
    this.items.push({name: "Laptop", link: "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg"});
    this.items.push({name: "Inverter", link: "https://s.alicdn.com/@sc04/kf/Ue1efc31baced453aa4d9040b5456a82ca.jpg_720x720q50.jpg"});
  }
}
