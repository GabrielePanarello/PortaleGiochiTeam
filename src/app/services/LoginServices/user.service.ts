import { Injectable } from '@angular/core';
import { User } from '../../objs/user';

@Injectable()
export class UserService {

  constructor() { }

  private users: User[] = [
    new User("01", "Simo", "simo", true),
    new User("02", "Utente", "utente", false)
  ];

  getUsersList(): User[] {
    return this.users;
  }

  checkIsLogged(sessionValue: string): boolean {
    if (sessionValue != null) {
      for (let user of this.users) {
        if (user.username == sessionValue) {
          if (user.isAdmin == true) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }

}
