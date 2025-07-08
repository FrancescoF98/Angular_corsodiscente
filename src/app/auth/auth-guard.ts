import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const boh = inject(Auth);
  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  }
  else {
    router.navigate(['/']);
    return false;
  }
};
