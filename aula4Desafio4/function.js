// // FUNÇÕES COM JAVASCRIPT
// // Bloco de código que pode ser reutilizado e executado.

// function mostrarMensagem(){
//     console.log("Primeira aula com Função!");
// }
// //Aqui estamos ativando a função
// mostrarMensagem();

// //========================================================================
// function soma(numero1, numero2){
//     return numero1 + numero2;
// }
// soma(10, 2);
// soma(20, 3);
// soma(5, 12);

// //========================================================================

// // PARÂMETRO
// function dobro(numero){
//     return numero * 2;
// }

// // ARGUMENTO
// console.log(dobro(10));
// console.log(dobro(30));

// //========================================================================

// function areaQuadrado(lado){
//     return lado * lado;
// }

// const resultado = areaQuadrado(100);
// const resultado2 = areaQuadrado(350);

// console.log("A área² é de: ", resultado, "m²");
// console.log("A área² é de: ", resultado2, "m²");

// //========================================================================

// // CALCULAR IMC => peso / (altura²)

// function imc(peso, altura){
//     return peso / (altura ** 2);
// }

// //ATIVAR
// const Result = imc(62, 1.65);
// const Result2 = imc(100, 1.95);

// console.log("O resultado do IMC é:", Result);
// console.log("O resultado do IMC é:", Result2);



//DESAFIO FUNCTION

//1 - crie uma função que exiba uma mensagem no console
function mensagemNoConsole() {
    console.log("Primeira função!")
}

mensagemNoConsole();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function meuNome(name) {
    console.log(name);
}

meuNome(`Luis`);

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function allInfos(nome, idade, musica) {
    console.log(`Me chamo ${nome}, tenho ${idade}, adoro ${musica}`);
}

allInfos(`Luis`, `22 anos`, `MPB`);

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function filmeMusica(filme, musica) {
    console.log(`Filme bom é ${filme}, e música boa é ${musica}, do grande mestre Cartola.`);
}

filmeMusica(`Tropa de Elite 1`, `Preciso Me Encontrar`);

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(num) {
    return num * 3;
}

let resultado = triplo(2);
console.log(`Resposta: ${resultado}`);