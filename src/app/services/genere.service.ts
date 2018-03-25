import { Injectable } from '@angular/core';
import { Genere } from '../objs/genere';

@Injectable()
export class GenereService {

  constructor() { }

  private genereItems : Genere[] = [
    new Genere(0, "Tutti"),
    new Genere(1, "Sportivo"),
    new Genere(2, "Sparatutto"),
    new Genere(3, "Avventura")
  ];

  getGenereItems() : Genere[]{
    return this.genereItems;
  }

  getGenereById(id: number): Genere {
    for (let item of this.genereItems) {
        if (item.id == id) {
            return item;
        }
    }
  }
}
