import { Component, OnInit } from '@angular/core';
import { Menu } from '../../objs/menu';
import { MenuService } from '../../services/menu.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[];
  isAdmin = false;
  username: string;

  constructor() {
    let menuService: MenuService = new MenuService();
    let userService: UserService = new UserService();
    this.menuItems = menuService.getMenuItems();
    this.isAdmin = userService.checkIsLogged(sessionStorage.getItem('user'));
  }

  ngOnInit() {

    if (!this.isAdmin) {
      for (let item of this.menuItems) {
        if (item.nome == "edit") {
          item.visualizzato = true;
        }
      }
    }else{
      this.username = sessionStorage.getItem('user');
      this.username = this.username.toLocaleUpperCase();
    }

    
  }
}
