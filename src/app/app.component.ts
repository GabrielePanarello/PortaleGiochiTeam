import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged = false;

  constructor(private loginService: LoginService){
    this.loginService.mySubject$.subscribe ((newValue: boolean) => {
      this.isLogged = newValue;
    });
  }

  ngOnInit(){
    if(sessionStorage.getItem('user') != null){
      this.isLogged = true;
    } 
  }
}
