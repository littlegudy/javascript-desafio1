// ================CONDICIONAIS IF E ELSE==========================

//Verifica se uma expressão é verdadeira com If, ou false com Else

// let idade = 22;

// if(idade >=18) {
//     console.log("Você é maior de idade");
// } else {
//     console.log("Você é menor de idade");
// }

// ===========================================================

// let maiorIdade = true;
// let estudandoProgramacao = true;

// if(maiorIdade) {
//     console.log("Você é maior de idade");
// } else if (estudandoProgramacao) {
//     console.log("Estuda programação");
// } else {
//     console.log("Nenhuma das opções");
// }


// =================OPERADORES LÓGICOS========================


// Operador lógico de negação
// Operador lógico ! nega uma operação booleana
// let teste = true;
// console.log(teste)

// =================OPERADORES DE COMPARAÇÃO=======================

// Operadores de comparação
// Sempre vão retornar um valor booleano
// let verificar = 15 < 7;  // < (menor que)
// let verificar = 15 > 7; // > (maior que)
// let verificar = 15 >= 15; // >= (maior ou igual)
// let verificar = 15 <= 14; // <= (menor ou igual)
// console.log(verificar);

// ===========================================================


// Verifica se é igual ==  VERIFICA O VALOR
// Verifica se é estritamente igual ===  VERIFICA O VALOR E O TIPO DO DADO

// let verificar = 4 === "4"; 
// console.log(verificar);


// ===========================================================

// != DIFERENTE        !== ESTRITAMENTE DIFERENTE
// let verificar = 5 !== 5; //ou  let verificar = 5 != 5; (daria true)
// console.log(verificar);



// ===============OPERADORES LÓGICOS======================

// && (compara se uma expressão E a outra é verdadeira)

// let idade = 22;
// let corDaRoupa = "purple";

// if((idade >= 18) && (corDaRoupa === "purple")) {
//     console.log("Pode entrar na festa!");
// } else {
//     console.log("Não pode entrar!");
// }


// || (compara se uma expressão OU a outra é verdadeira)

// let idade = 22;
// let corDaRoupa = "white";

// if((idade >= 18) || (corDaRoupa === "purple")) {
//     console.log("Pode entrar na festa!");
// } else {
//     console.log("Não pode entrar!");
// }



// ===============EXERCICIO USANDO ||======================

// let meuNiver = "novembro";
// let mesUm = "janeiro";
// let mesDois = "dezembro";

// if(meuNiver === mesUm || meuNiver === mesDois) {
//     console.log("Você faz aniversário em Jan ou Dez!");
// } else {
//     console.log("Você não faz aniversário em Jan ou Dez!");
// }


//DESAFIO 02 IF ELSE 

let idade = 22;
let humano = true;
let meuNiver = "novembro";
let mesUm = "janeiro";
let mesDois = "dezembro";

if(idade > 18 && humano === true) {
    console.log("Vc é um humano maior de idade!");
} else {
    console.log("Vc não atingiu um dos requisitos");
}

if(meuNiver === mesUm || meuNiver === mesDois) {
    console.log("Você faz aniversário em Jan ou Dez!");
} else {
    console.log("Você não faz aniversário em Jan ou Dez!");
}


//Exercícios bônus IF E ELSE

let nome = "Luís";
let sobrenome = "Rocha";

if(nome[0] == "R") {
    console.log("Seu nome começa com R!");
} else {
    console.log("Seu nome não começa com R!");
}

if(sobrenome.length > 6 || nome[0] == "E") {
    console.log("Seu sobrenome tem mais de 6 letras ou seu nome começa com E!")
} else {
    console.log("Seu sobrenome não tem mais de 6 letras ou seu nome não começa com E!")
}





