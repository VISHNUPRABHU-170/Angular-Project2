import { Component } from '@angular/core';
import { Frames } from '../Interface/frames';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  items:Frames[] = [];
  typed:string="";
  search:string="";
  condition:boolean = true;
  temp:Frames[] = [];
  constructor() {
    this.items.push({name: " MAC Book", link: "https://www.nextstepreborn.co.th/wp-content/uploads/2022/04/cover-Macbook-Pro-13.3-2017.png"});
    this.items.push({name: " Cp Plus Ip demo Camera", link: "https://4.imimg.com/data4/TV/CX/MY-12278352/cctv-camera-office.jpg"});
    this.items.push({name: " Printer", link: "https://4.imimg.com/data4/GL/UP/MY-5812789/3-printer.jpg"});
    this.items.push({name: " Laptop", link: "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg"});
    this.items.push({name: " Inverter", link: "https://s.alicdn.com/@sc04/kf/Ue1efc31baced453aa4d9040b5456a82ca.jpg_720x720q50.jpg"});
    this.items.push({name: " Wireless USB Scanner", link: "https://m.media-amazon.com/images/I/6110A-BbPwL._AC_UF1000,1000_QL80_.jpg"});
    this.items.push({name: " HardDisk 1000GB", link: "https://5.imimg.com/data5/HP/OJ/BO/SELLER-59879936/1000-gb-seagate-hard-disc.jpg"});
    this.items.push({name: " Inverter", link: "https://s.alicdn.com/@sc04/kf/Ue1efc31baced453aa4d9040b5456a82ca.jpg_720x720q50.jpg"});
    this.items.push({name: " 24-Inch Monitor", link: "https://cdn.thewirecutter.com/wp-content/media/2022/11/24inchmonitors-2048px-9977-3x2-1.jpg"});
    this.items.push({name: " Scanner", link: "https://4.imimg.com/data4/PJ/UR/MY-7271667/computer-scanner.jpg"});
    this.items.push({name: " Gaming mouse", link: "https://www.mytrendyphone.eu/images/6D-4-Speed-DPI-RGB-Gaming-Mouse-G5-Black-05042021-01-p.webp"});
    this.items.push({name: " Keyboard", link: "https://www.halalpantry.com.au/cdn/shop/products/V227-8692600513991-1659930225-02.png?v=1677385818&width=1946"});
    this.temp = this.items;
  }
  update() {
    this.search = this.typed;
    this.items = this.temp;
    this.condition = true;
    if(this.search !== '') {
      this.items = this.items.filter(item => item.name.toLocaleLowerCase().includes(this.search.toLowerCase()));
      console.log(this.items.length);
      if(this.items.length === 0) {
        this.condition = false;
      }
    }
  }
}
