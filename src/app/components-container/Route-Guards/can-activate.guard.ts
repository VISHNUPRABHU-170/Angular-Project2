import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("isLoggedIn")=="true"){
    return true;
  }else {
    alert("Login Required");
    return false;
  }
};
