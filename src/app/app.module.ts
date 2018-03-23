import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainRouter } from './routers/mainRouter';
import { ListaGameService } from './services/list-game.service';
import { MenuService } from './services/menu.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth-service.service';
import { AuthLoginService } from './services/auth-login.service';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    MenuComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRouter
  ],
  providers: [ListaGameService, MenuService, LoginService, UserService, AuthGuardService, AuthService, AuthLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
