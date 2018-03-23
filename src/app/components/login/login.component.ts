import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/LoginServices/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/GuardServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logIn() {
    if (this.username != "" && this.password != "" && this.authService.checkLogin(this.username, this.password) == true) {
      this.loginService.changeSubject(true);
      this.router.navigate(['/home']);
    }
  }

}
