import { Component, OnInit } from '@angular/core';
import { ListaGameService } from '../../services/list-game.service';
import { Game } from '../../objs/game';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { GenereService } from '../../services/genere.service';
import { Genere } from '../../objs/genere';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  gamesList: Game[];
  generi: Genere[];

  inputGame: string;
  outputGame: Game;
  newItem: Game;

  founds= false;
  fromDetail = false;
  isClicked = false;

  constructor(private listService: ListaGameService, private genresService: GenereService, private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.outputGame = this.listService.getGameById(params['id']);
        this.newItem = this.outputGame.clone();
        this.newItem.genere = this.newItem.genere.clone();
        this.fromDetail = true;
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.authService.checkItemSign(this.newItem, this.outputGame, this.isClicked);
      }
    });

    this.generi = this.genresService.getGenereItems();
  }

  ngOnInit() {
    if (this.fromDetail == true) {
      this.listService.getGameById(this.newItem.id);
      this.listService.getGameById(this.outputGame.id);
    }

  }

  ngOnDestroy() {
    this.outputGame = undefined;
  }

  showGame(value: string) {
    if (value != undefined) {
      if (this.listService.getGameByName(value) == null) {
        this.founds = true;
        this.outputGame = undefined;
      } else {
        this.outputGame = this.listService.getGameByName(value);
        this.newItem = this.outputGame.clone();
        this.newItem.genere = this.newItem.genere.clone();
        this.founds = false;
      }
    } else {
      alert("Inserisci il Valore");
    }
  }

  updateGame() {
    this.listService.editGame(this.outputGame);
    this.isClicked = true;
    alert("Modificato");
  }

  resetDefaultGame(){
    this.outputGame = this.newItem;
  }

}
