import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaGameService } from '../../services/list-game.service';
import { Game } from '../../objs/game';
import { UserService } from '../../services/LoginServices/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item: Game;
  isLogged: boolean;

  constructor(private activatedRoute: ActivatedRoute, private gameService: ListaGameService, private userService: UserService) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.item = this.gameService.getGameById(params['id']);
      }
    });
  }

  ngOnInit() {
    if(this.userService.checkIsLogged(sessionStorage.getItem('user')) == true){
      this.isLogged = true;
    }

  }

  

}
