import { Injectable } from '@angular/core';
import { Genere } from '../objs/genere';

@Injectable()
export class GenereService {

  constructor() { }

  private genereItems : Genere[] = [
    new Genere(0,"sportivo"),
    new Genere(1,"sparatutto"),
    new Genere(2,"avventura")
  ];

  getGenereItems() : Genere[]{
    return this.genereItems;
  }
}
