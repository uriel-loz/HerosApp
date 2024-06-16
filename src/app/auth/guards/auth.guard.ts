import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard {
    private authService = inject(AuthService);
    private router = inject(Router);

    private checkAuthStatus(): boolean | Observable<boolean> {
        return this.authService.checkAuthentication()
                .pipe(
                    tap(isAuthenticated => {
                        if (!isAuthenticated) {
                            this.router.navigateByUrl('/auth/login');
                        }
                    
                    })
                )
    }

    public canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]): boolean | Observable<boolean> => {
        return this.checkAuthStatus();
    };

    public canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> => {
        return this.checkAuthStatus();
    }
}