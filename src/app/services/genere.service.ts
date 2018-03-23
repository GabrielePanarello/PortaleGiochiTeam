import { Injectable } from '@angular/core';
import { Genere } from '../objs/genere';

@Injectable()
export class GenereService {

  constructor() { }

  private genereItems : Genere[] = [
    new Genere(0, "tutti"),
    new Genere(1, "sportivo"),
    new Genere(2, "sparatutto"),
    new Genere(3, "avventura")
  ];

  getGenereItems() : Genere[]{
    return this.genereItems;
  }

  getGenereById(id: number): Genere {
    for (let item of this.genereItems) {
        if (item.id == id) {
            return item.clone();
        }
    }
  }
}
