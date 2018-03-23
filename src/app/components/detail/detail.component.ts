import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaGameService } from '../../services/list-game.service';
import { Game } from '../../objs/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item: Game;

  constructor(private activatedRoute: ActivatedRoute, private gameService: ListaGameService, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.item = this.gameService.getGameById(params['id']);
      }
    });
  }

  ngOnInit() {
  }

  redirectToEdit(item: Game){
    this.router.navigate(['edit/'+item.id]);
  }  

}
