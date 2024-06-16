import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PublicGuard {
    private authService = inject(AuthService);
    private router = inject(Router);

    public canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> => {
        return this.authService.checkAuthentication()
                .pipe(
                    tap(isAuthenticated => {
                        if (isAuthenticated) {
                            this.router.navigateByUrl('/');
                        }
                    }),
                    map(isAuthenticated => !isAuthenticated)
                );
    }
}