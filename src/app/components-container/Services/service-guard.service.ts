import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ServiceGuardService {
  constructor() {
    localStorage.setItem("isLoggedIn","false");
   }

  authenticate() {
    localStorage.setItem("isLoggedIn", "true");
  }
}
