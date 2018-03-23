import { Injectable } from '@angular/core';
import { Game } from '../objs/game';
import { Genere } from '../objs/genere';
import { GenereService } from './genere.service';

@Injectable()
export class ListaGameService {

    generi: Genere[];

    constructor(private genereService:GenereService){}

    ngOnInit() {
        this.generi = this.genereService.getGenereItems();
      }

  private items: Game[] = [
    new Game(1, "FIFA2018", "gioco di calcio", this.generi[0], 5, 30, 2018),
    new Game(2, "Need for Speed", "gare ad alta velocità su strade aperte",  this.generi[0], 6, 15, 2015),
    new Game(3, "Assassin's Creed", "gioco di guerra",  this.generi[2], 16, 20, 2007)
  ];

  getCharactersList(): Game[] {
    return this.items;
  }

  getGameById(id: number): Game {
    for (let item of this.items) {
        if (item.id == id) {
            return item.clone();
        }
    }
    return null;
  }

  getGameByName(name: string): Game {
    if (name) {
        for (let item of this.items) {
            if (item.name.toLowerCase() == name.toLowerCase()) {
                return item.clone();
            }
        }
    }
    return null;
  }

  changeGame(game: Game) {
    for (let item of this.items) {
        if (item.id == game.id) {
            item.name = game.name;
            item.annoUscita = game.annoUscita;
            item.descrizione = game.descrizione;
            item.genere = game.genere;
            item.prezzo = game.prezzo;
            item.rating = game.rating;
        }
    }
  }

  checkModification(game: Game) {
    if(!game)return false;
    for (let item of this.items) {
        if (item.id == game.id) {
            if (item.name == game.name && item.genere == game.genere && item.annoUscita == game.annoUscita && 
                item.descrizione == game.descrizione && item.prezzo == game.prezzo && item.rating == game.rating)
                return false;
            return true;
        }
    }
    return false;
  }
}
