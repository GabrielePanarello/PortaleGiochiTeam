export class Genere {

    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    clone(){
        return new Genere(this.id, this.name);
    }

}