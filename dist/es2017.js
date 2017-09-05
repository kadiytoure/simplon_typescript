"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//le let est une variable de block qui n'existera que
//dans le block de code actuel (un block est défini par
//des accolades) et dans les block enfant(si non redéfini)
var variableScope = "bloup";
var variableConstante = "blip";
//variableConstante = "bonjour tout le monde";
if (true) {
    var variableScope_1 = "blip";
    console.log(variableScope_1); //blip
}
console.log(variableScope); //bloup
var monTableau = [];
monTableau.filter(function (valeur) {
    return valeur === 'bloup';
});
//Cette instruction est strictement équivalente à celle
//du dessus.
monTableau.filter(function (valeur) { return valeur === 'bloup'; });
//Et elle est également équivalente à celle-ci
monTableau.filter(function (valeur) {
    return valeur === 'bloup';
});
//# sourceMappingURL=es2017.js.map