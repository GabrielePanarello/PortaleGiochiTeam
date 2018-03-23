import { Genere } from "./genere";



export class Game{
    
    id: string;
    name: string;
    immagine:string;
    descrizione: string;
    genere: Genere;
    rating: number;
    prezzo: number;
    annoUscita: number;

    constructor(id: string = undefined, name: string = "",immagine:string, descrizione: string = "", genere: Genere = undefined, rating: number=undefined, prezzo: number=undefined, annoUscita: number=undefined){
        this.id = id;
        this.name = name;
        this.immagine=immagine;
        this.descrizione = descrizione; 
        this.genere = genere;
        this.rating = rating;
        this.prezzo = prezzo; 
        this.annoUscita = annoUscita; 
    }

    clone(){
        return new Game(this.id, this.name, this.immagine,this.descrizione, this.genere.clone(), this.rating, this.prezzo, this.annoUscita);
    }

}
