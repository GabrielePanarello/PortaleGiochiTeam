import { Injectable } from '@angular/core';
import { Game } from '../objs/game';
import { Genere } from '../objs/genere';
import { GenereService } from './genere.service';

@Injectable()
export class ListaGameService {

    constructor(private genereService: GenereService) { }

    private items: Game[] = [
        new Game("1", "FIFA2018", "../../../assets/fifa.jpg", "gioco di calcio", this.genereService.getGenereById(1).clone(), 5, 30, 2018),
        new Game("2", "Need for Speed", "../../../assets/needfor.jpg", "gare ad alta velocità su strade aperte", this.genereService.getGenereById(0).clone(), 6, 15, 2015),
        new Game("3", "Assassin's Creed", "../../../assets/assasin.jpg", "gioco di guerra", this.genereService.getGenereById(2).clone(), 16, 20, 2007)
    ];

    getGamesList(): Game[] {
        return this.items;
    }

    getGameById(value: string): Game {
        for (let item of this.items) {
            if (value == item.id) {
                console.log(item);
                return item;
            }
        }
    }

    getGameByName(value: string): Game {
        for (let item of this.items) {
            if (item.name.toLowerCase().match(value.toLowerCase())) {
                return item;
            }
        }
    }

    editGame(modifiedGame: Game) {
        for (let item of this.items) {
            if (modifiedGame.id == item.id) {
                item = modifiedGame;
            }
        }
    }
}
