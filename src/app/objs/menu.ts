export class Menu {

    id: string;
    nome: string;
    visualizzato: boolean;

    constructor(id: string, nome: string, visualizzato: boolean){
        this.id = id;
        this.nome = nome;
        this.visualizzato = visualizzato;
    }
}