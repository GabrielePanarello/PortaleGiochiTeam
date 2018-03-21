import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MainRouter } from './routers/mainRouter';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    EditComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MainRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
