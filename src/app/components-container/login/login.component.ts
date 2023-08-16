import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import {ServiceGuardService} from '../Services/service-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('popupState', [
      state('inactive', style({left: '-100%'})),
      state('active', style({left: '50%'})),
      transition('inactive => active', animate('0.3s ease-in-out')),
    ])
  ]
})
export class LoginComponent {
  number:boolean = true;
  num:string = "";
  otp:boolean = false;
  arr:string[]=[];
  a:string ="";
  b:string ="";
  c:string ="";
  d:string ="";
  condition:boolean = false;
  conditionNum:boolean = false;

  constructor(private service: ServiceGuardService, private router: Router) {}

  show() {
    const len = this.num.length;
    if(this.num === ''){
       this.conditionNum = true;
    }
    else{
      this.number = !this.number;
      this.otp = !this.otp;
    }
  }
  activate() {
    if(this.a === '' || this.b === '' || this.c === '' || this.d === ''){
       this.condition = true;
    }
    else {
      this.service.authenticate();
      this.router.navigate(["/home"]);
    }
  }
}
