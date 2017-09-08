export class User {
    name: string;
    password: string;

    constructor(name, password:string ) {
        this.name = name;
        this.password = password;
    }
    /*
    shout():string {
return "this.user";
//return "this.psswd";
    }
*/
}
/*
export class GestionUtilisateur {
    private name:string[] = [];

    ajouter(item:string):void {
        this.name.push(item);
    }

    supprimer(item:string):void {
        this.name = 
        this.name.filter((valeur) => valeur !== item);
    }
    lister():string[] {
        return this.name;
    }
}
*/