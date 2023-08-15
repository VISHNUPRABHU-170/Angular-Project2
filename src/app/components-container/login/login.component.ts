import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

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
  otp:boolean = false;

  show() {
    this.number = !this.number;
    this.otp = !this.otp;
  }
}
