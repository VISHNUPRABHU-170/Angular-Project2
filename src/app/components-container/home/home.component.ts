import { Component } from '@angular/core';
import { Frames } from '../Interface/frames';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items:Frames[] = [];
  imageArray:string[] = [];
  imageName: string[] = ["Grapics Card", "MAC Book", "I MAC", "CCTV Camera", "Keyboard"];
  index:number = 0;
  constructor() {
    this.items.push({name: "Cp Plus Ip demo Camera", link: "https://4.imimg.com/data4/TV/CX/MY-12278352/cctv-camera-office.jpg", value: 0});
    this.items.push({name: "Printer", link: "https://4.imimg.com/data4/GL/UP/MY-5812789/3-printer.jpg", value: 0});
    this.items.push({name: "Laptop", link: "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg", value: 0});
    this.items.push({name: "Inverter", link: "https://s.alicdn.com/@sc04/kf/Ue1efc31baced453aa4d9040b5456a82ca.jpg_720x720q50.jpg", value: 0});
    this.imageArray.push("https://fdn.gsmarena.com/imgroot/news/22/09/nvidia-40-series/inline/-1200/gsmarena_001.jpg");
    this.imageArray.push("https://i.ibb.co/4jv0sKZ/macbook-pro-14-m2-max-removebg-preview.png");
    this.imageArray.push("https://i.ibb.co/27nsmbq/Apple-imac-magickeyboardnum-magicmouse2-macos-wallpaper-08042020-big-jpg-large-removebg-preview.png");
    this.imageArray.push("https://i.ibb.co/rkkDkWQ/51m-ym-BAG-L-removebg-preview.png");
    this.imageArray.push("https://i.ibb.co/bLjKdqb/6103qfr-Vtt-L-AC-UF1000-1000-QL80-removebg-preview.png");
  }
  ngOnInit(): void {
    this.start();
  }

  start(): void {
    setInterval(() => {
      console.log(this.index);
      this.index = (this.index +1) % this.imageArray.length;
    },3000)
  }
}
