import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable()
export class AuthLoginService implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        if (sessionStorage.getItem('user') == null) {
            return true;
        } else {
            this.router.navigate(['/home']);
            return false;
        }
    }

}
