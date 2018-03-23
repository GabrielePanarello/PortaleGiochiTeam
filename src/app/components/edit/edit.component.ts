import { Component, OnInit } from '@angular/core';
import { ListaGameService } from '../../services/list-game.service';
import { Game } from '../../objs/game';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  gamesList: Game[];
  inputGame: string;
  outputGame: Game;

  constructor(private listGameService: ListaGameService) { }

  ngOnInit() {
  }

  ricerca(){
      this.outputGame = this.listGameService.getGameByName(this.inputGame);
      console.log(this.outputGame);
  }

}
