import { Component, OnInit } from '@angular/core';
import { Game } from '../../objs/game';
import { ListaGameService } from '../../services/list-game.service';
import { Router } from '@angular/router';
import { Genere } from '../../objs/genere';
import { GenereService } from '../../services/genere.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filtro="tutti";
  items: Game [];
  generi: Genere[];

  constructor(private router: Router, private listService: ListaGameService, private genereService:GenereService){}

  ngOnInit() {
    this.items = this.listService.getCharactersList();
    this.generi = this.genereService.getGenereItems();
  }

  visualizzaDettaglio(item: Game)
  {
      this.router.navigate(['/detail/'+item.id]);
  }

}
