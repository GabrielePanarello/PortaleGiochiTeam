import { Injectable } from '@angular/core';
import { User } from '../objs/user';
import { UserService } from './user.service';
import { Game } from '../objs/game';

@Injectable()
export class AuthService {

  isModified = true;
  users:  User[];

  constructor() {
    let userService : UserService = new UserService();
    this.users = userService.getUsersList();
   }

  checkLogin(username: string, password: string): boolean {
    for(let user of this.users){
    if (username == user.username && password == user.password) {
      sessionStorage.setItem('user', username);
      return true;
    }
  }

  }

  checkItemSign(item: Game, modifiedItem: Game, isClicked: boolean) {
    console.log("Item 1: "+ JSON.stringify(item) + "\n\nItem 2 "+JSON.stringify(modifiedItem));
    if (JSON.stringify(item) != JSON.stringify(modifiedItem)) {
      this.isModified = false;
    } else {
      this.isModified = true;
    }

    if (isClicked == true) {
      this.isModified = true;
    }
  }

}
