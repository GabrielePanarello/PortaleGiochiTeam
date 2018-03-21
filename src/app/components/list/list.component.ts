import { Component, OnInit } from '@angular/core';
import { Game } from '../../objs/game';
import { ListaGameService } from '../../services/list-game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filtro:string="tutti";
  items: Game [];

  constructor(private router: Router, private listService: ListaGameService){}

  ngOnInit() {
    this.items = this.listService.getCharactersList();
  }

  visualizzaDettaglio(item: Game)
  {
      this.router.navigate(['/detail/'+item.id]);
  }

}
