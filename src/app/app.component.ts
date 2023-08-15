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
  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn")) {
      this.isAuthenticated = true;
    }
  }
  constructor(private router: Router) {
    if(this.isAuthenticated == false) {
      console.log(localStorage.getItem("isLoggegIn"));
      this.router.navigate(['/login']);
    }
    
  }
}
