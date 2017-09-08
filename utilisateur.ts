export class Utilisateur {
    user: string;
    psswd: string;

    constructor(user: string, psswd:string ) {
        this.user = user;
        this.psswd = psswd;
    }
    shout():string {
return "this.user";
//return "this.psswd";
    }
}

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