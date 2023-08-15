import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("isLoggedIn")=="true"){
    return true;
  }else {
    return false;
  }
};
