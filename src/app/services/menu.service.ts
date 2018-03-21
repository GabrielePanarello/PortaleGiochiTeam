import { Injectable } from '@angular/core';
import { Menu } from '../objs/menu';

@Injectable()
export class MenuService {

  constructor() { }

  private menuItems: Menu[] = [
    new Menu('01','Home',false),
    new Menu('02','Lista',false),
    new Menu('03','Modifica',false),
  ];

  getMenuItems(): Menu[]{
    return this.getMenuItems(); 
  }

}
