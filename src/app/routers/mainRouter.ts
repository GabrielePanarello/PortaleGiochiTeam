import { MenuComponent } from "../components/menu/menu.component";
import { HomeComponent } from "../components/home/home.component";
import { ListComponent } from "../components/list/list.component";
import { EditComponent } from "../components/edit/edit.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";

//Prova
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'edit', component: EditComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      )
      // other imports here
    ],
    declarations: [
        AppComponent,
      ],
  })
  export class MainRouter { }