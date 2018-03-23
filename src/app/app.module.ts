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
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    MenuComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRouter
  ],
  providers: [ListaGameService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
