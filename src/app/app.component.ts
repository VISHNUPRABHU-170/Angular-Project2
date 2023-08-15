import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Project1';
  isAuthenticated:boolean = false;
  constructor(private router: Router) {
    if(localStorage.getItem("isLoggedIn") === "false") {
      this.router.navigate(['/login']);
    }
  }
}
