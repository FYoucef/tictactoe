console.log("Programme Morpion");


console. log("Mon deuxième message");
/* 
conditions:
- condition d'initialisation: i=0
- condition d'arret: i=2
- incrementation: i=i+1 => i++
*/
let morpionBoard=[[],[],[]]
initialiserMorpionBoard(morpionBoard)
afficheMorpionBoard(morpionBoard);
positionnePiece(morpionBoard, 1, 1, 'O');

afficheMorpionBoard(morpionBoard);
positionnePiece(morpionBoard, 0, 0, 'X');

afficheMorpionBoard(morpionBoard);
afficheMorpionBoard(morpionBoard);

positionnePiece(morpionBoard, 2, 1, 'O');
afficheMorpionBoard(morpionBoard);

positionnePiece(morpionBoard, 0, 1, 'X');
afficheMorpionBoard(morpionBoard);

positionnePiece (morpionBoard, 0, 2, 'O');
afficheMorpionBoard(morpionBoard);



/*******mes fonction *******/
function initialiserMorpionBoard(board) {
    console.log("afficheMorpionBoard");
    let i = 0;
    for (ligne = 0; ligne <= 2; ligne++) {
        //deuxième for
        let ligneString = '';
        for (colonne = 0; colonne <= 2; colonne ++) {
            morpionBoard[ligne][colonne] = " ";
        }
    }
}
function positionnePiece(board, ligne, colone, piece) {
    console.log("positionPiece");
    board[ligne][colone] = piece;
}
function afficheMorpionBoard(board) {
    console.log("afficheMorpionBoard");
    let i = 0;
    for (ligne = 0; ligne <= 2; ligne++) {
        //deuxième for
        let ligneString = '';
        for (colonne = 0; colonne <= 2; colonne ++) {
            //morpionBoard[ligne][colonne] = "x";
            //positionPiece(MorpionBoard, ligne , colonne <, "-");
            ligneString = ligneString + ' | ' + board[ligne][colonne];

        }
        console.log(ligneString+ ' | ');
        console.log ("_____________");

    }
}
// console.log ('Debut de partie');
// console.log (' |  | ');
// console.log ('---------');
// console.log(' | | ');
// console.log ('---------');
// console.log(' | | ');



// console.log('fin de partie');
// console.log('O | X | O');
// console.log('---------');
// console.log('X |   O');
// console.log('---------');
// console.log('X | A 2 X');

