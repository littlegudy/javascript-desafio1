//Loop
// for(let contador = 0; contador <= 10; contador++ ){
//     console.log(contador);
// } 

// function contagem(numero){
//     for(let num = numero; num <=10; num++){
//         console.log(num);
//     }
// }

// contagem(2);


//  OBJETIVO: Calcular a média da nota dos alunos
//  FIZERAM DUAS PROVAS

// function media(nota1, nota2) {
//     const resultadoFinal = (nota1 + nota2) / 2;

//     if(resultadoFinal >= 9) {
//         console.log(`Sua nota foi ${resultadoFinal}. MB`);
//     } else if(resultadoFinal >= 7 && resultadoFinal < 9) {
//         console.log(`Sua nota foi ${resultadoFinal}. B`);
//     } else if(resultadoFinal >= 5 && resultadoFinal < 7) {
//         console.log(`Sua nota foi ${resultadoFinal}. R`);
//     } else {
//         console.log(`Sua nota foi ${resultadoFinal}. I`);
//     }
// }

// media(6, 10);



// SWITCH CASE 

let dia = 1;

switch(dia) {
    case 0:
        console.log("Hoje é domingo");
    break;
    case 1:
        console.log("Hoje é segunda");
    break;
    case 1:
        console.log("Hoje é terça");
    break;
    case 2:
        console.log("Hoje é quarta");
    break;
    case 3:
        console.log("Hoje é quinta");
    break;
    case 4:
        console.log("Hoje é sexta");
    break;
    case 5:
        console.log("Hoje é sábado");
    break;
    default:
        console.log("Nenhum dia")
    break;
}