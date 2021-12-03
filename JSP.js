 let jAiFaim = false;
let monAge = 17;
let monPrenom = "youcef";

console.log(jAiFaim);
console.log(17);
console.log("youcef");

let onePiece = "pirates chez le monde de one piece";
let naruto = "ninja konoha hokage";
let snk = "attaque des titans sur shiganshina";

//console.log(livreprefere);
tableau = [onePiece, naruto, snk];
console.log(tableau);

console.log(jAiFaim);
console.log(monAge);
console.log(monPrenom);
//obj
let youcef = {
    jaiFaim: false,
    monAge: 17,
    monPrenom: "youcef"
};

let ervino = {
    jaiFaim: false,
    monAge: 18,
    monPrenom: "ervino"
};
let guillaume = {
    jaiFaim: false,
    monAge: 52,
    monPrenom: "guillaume",
    aUneVoiture: true
};
let Juba = {
    jaiFaim: false,
    monAge: 28,
    monPrenom: "Juba"
};
console.log(youcef);
console.log(ervino);
console.log(guillaume);
console.log(Juba);

class Personne {
    constructor(jaiFaim, monPrenom, monAge) {
        this.jaiFAIM = jaiFaim;
        this.prenom = monPrenom;
        this.monAge = monAge;
    }
}

let g = new Personne(true, "guillaume", 52);
let j = new Personne(true, "juba", 28);
let e = new Personne(true, "ervino", 18);
let y = new Personne(true, "youcef", 17);
console.log(g);
console.log(j);
console.log(e);
console.log(y);

console.log("comparer");
console.log(youcef); // objet
console.log(y); // instance de classe


let table = 6;
let N = 10;
for (let i = 0; i < N; i++) {
    //console.log(i);
    let string='';
    string+=i;
    string+=' * '+table+' = '
    string+=i *table;
    console.log(string);

}



