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
import { UserService } from './services/LoginServices/user.service';
import { AuthGuardService } from './services/GuardServices/auth-guard.service';
import { AuthService } from './services/GuardServices/auth.service';
import { AuthLoginService } from './services/GuardServices/auth-login.service';
import { DetailComponent } from './components/detail/detail.component';
import { GenereService } from './services/genere.service';
import { LoginService } from './services/LoginServices/login.service';



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
  providers: [ListaGameService, MenuService, GenereService, LoginService, UserService, AuthGuardService, AuthService, AuthLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
