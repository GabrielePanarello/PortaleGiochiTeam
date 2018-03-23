import { Component, OnInit } from '@angular/core';
import { ListaGameService } from '../../services/list-game.service';
import { Game } from '../../objs/game';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  gamesList: Game[];
  inputGame: string;
  outputGame: Game;
  hasChanges: boolean = false;

  constructor(private listGameService: ListaGameService, private router: Router) { 
    this.gamesList = listGameService.getCharactersList();
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.hasChanges = this.listGameService.checkModification(this.outputGame);
      }
    });
  }

  ngOnInit() {
  }

  ricerca(){
      this.outputGame = this.listGameService.getGameByName(this.inputGame);
      console.log(this.outputGame);
  }
  
  modifica() {
    this.listGameService.changeGame(this.outputGame);
  }

}
