import { Component, OnInit } from '@angular/core';
import { Menu } from '../../objs/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[];

  constructor(private menuService: MenuService) {
    this.menuItems = menuService.getMenuItems();
   }

  ngOnInit() {
  }

}
