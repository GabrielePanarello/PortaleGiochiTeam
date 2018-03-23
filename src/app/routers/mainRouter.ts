import { MenuComponent } from "../components/menu/menu.component";
import { HomeComponent } from "../components/home/home.component";
import { ListComponent } from "../components/list/list.component";
import { EditComponent } from "../components/edit/edit.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { LoginComponent } from "../components/login/login.component";
import { AuthGuardService } from "../services/auth-guard.service";
import { AuthLoginService } from "../services/auth-login.service";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'list', component: ListComponent, canActivate: [AuthGuardService] },
    { path: 'edit', component: EditComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent, canActivate: [AuthLoginService]},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '**', component: HomeComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
  })
  export class MainRouter { }