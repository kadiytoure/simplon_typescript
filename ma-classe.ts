
/*
On peut faire en typescript des classes assez similaires 
à celle du PHP avec des propriétés typées, des visibilités,

*/
class MaClasse {
private maPropriete:string;

//Méthode de construction, équivalente à __construct
constructor(){
     this.maPropriete = 'bloup';
}

methode():string {
    return 'la propriété vaut : '+this.maPropriete;
}
}