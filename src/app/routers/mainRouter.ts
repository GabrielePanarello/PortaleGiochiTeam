import { MenuComponent } from "../components/menu/menu.component";
import { HomeComponent } from "../components/home/home.component";
import { ListComponent } from "../components/list/list.component";
import { EditComponent } from "../components/edit/edit.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { DetailComponent } from "../components/detail/detail.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'edit', component: EditComponent},
    { path: 'edit/:id', component: EditComponent},
    { path: "detail/:id", component: DetailComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
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