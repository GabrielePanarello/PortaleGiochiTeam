export class User{
    
    id: string;
    username: string;
    password: string;
    isAdmin: boolean;

    constructor(id: string, username: string, password: string, isAdmin:boolean){
        this.id = id;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }

}