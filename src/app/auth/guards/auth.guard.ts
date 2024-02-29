import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

const checkAuthStauts = (): Observable<boolean> => {
  const authService : AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.chechAuthentication()
  .pipe(
    tap((isAuthenticated) => console.log('Authenticated: ', isAuthenticated)),
    tap((isAuthenticated)=>{
      if(!isAuthenticated){
        router.navigate(['/auth/login']);
      }
    })

  );
};


export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  return checkAuthStauts();
};

export const canMatchGuard: CanMatchFn = ( //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {


  return checkAuthStauts();
};
