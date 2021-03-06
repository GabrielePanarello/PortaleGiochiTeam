import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../LoginServices/user.service';
import { User } from '../../objs/user';
import { EditComponent } from '../../components/edit/edit.component';
import { AuthService } from './auth.service';
import { LoginService } from '../LoginServices/login.service';

@Injectable()
export class AuthGuardService {

  users: User[];

  constructor(private authService: AuthService, private router: Router, private loginService: LoginService) { 
    let userService: UserService = new UserService();
    this.users = userService.getUsersList();  
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (sessionStorage.getItem('user') == null) {
      this.router.navigate(['/login']);
    } else {
      if(state.url.indexOf("edit") != -1){
        for (let user of this.users) {
          if (user.username == sessionStorage.getItem('user') && user.isAdmin != true) {
            this.router.navigate(['/home']);
          }
        }
      }
      return true;
    }
  }

  canDeactivate(component: EditComponent) {
    if(this.authService.isModified == false){
      return window.confirm('Sei Sicuro?');
    }
    return this.authService.isModified;
  }

}
