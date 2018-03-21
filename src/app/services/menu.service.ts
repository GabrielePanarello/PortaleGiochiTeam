import { Injectable } from '@angular/core';
import { Menu } from '../objs/menu';

@Injectable()
export class MenuService {

  constructor() { }

  private menuItems : Menu[] = [
    new Menu("01","home",false),
    new Menu("02","list",false),
    new Menu("01","edit",false)
  ];

  getMenuItems() : Menu[]{
    return this.menuItems;
  }

}
