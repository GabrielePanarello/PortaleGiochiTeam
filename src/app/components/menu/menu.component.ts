import { Component, OnInit } from '@angular/core';
import { Menu } from '../../objs/menu';
import { MenuService } from '../../services/menu.service';
import { UserService } from '../../services/LoginServices/user.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/LoginServices/login.service';
import { AuthService } from '../../services/GuardServices/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[];
  isAdmin = false;
  username: string;

  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) {
    let menuService: MenuService = new MenuService();
    let userService: UserService = new UserService();
    this.menuItems = menuService.getMenuItems();
    this.isAdmin = userService.checkIsLogged(sessionStorage.getItem('user'));
  }

  ngOnInit() {

    this.username = sessionStorage.getItem('user');
    this.username = this.username.toLocaleUpperCase();

    if (!this.isAdmin) {
      for (let item of this.menuItems) {
        if (item.nome == "edit") {
          item.visualizzato = true;
        }
      }
    }
  }

  logout(){
    sessionStorage.removeItem('user');
    if(this.authService.isModified == false){
    this.loginService.changeSubject(false);
    this.router.navigate(["/login"]);
    }
    
  }
}
