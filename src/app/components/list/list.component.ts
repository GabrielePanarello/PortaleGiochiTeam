import { Component, OnInit } from '@angular/core';
import { Game } from '../../objs/game';
import { ListaGameService } from '../../services/list-game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Game [];

  constructor(private listService: ListaGameService)
  {

  }

  ngOnInit() {
    this.items = this.listService.getCharactersList();
  }

}
