// // Objeto é uma coleção de dados representado por chaves {}
// // TEM CHAVES É OBJETO

// // variavel nomevariavel = {
// //  propriedade: valor,
// //  propriedade: valor
// //}

// let dados = [

//     {
//         nome: "Isabel", //string
//         idade: 19, //number
//         humano: false, //boolean
//         amigos: ["Rian", "Eliana"] //array
//     },

//     {
//         nome: "Luís", //string
//         idade: 19, //number
//         humano: false, //boolean
//         amigos: ["Rian", "Eliana"] //array
//     },

//     {
//         nome: "Rian", //string
//         idade: 19, //number
//         humano: false, //boolean
//         amigos: ["Rian", "Eliana"] //array
//     }

// ]
// console.log(dados[2]);
// console.log(dados[1].idade);


// const pessoa = {
//     nome: "Cosme",
//     idade: 700
// }
// pessoa.humano = false //adicionando nova prop
// console.log(pessoa);

// // DELETAR UMA PROP

// delete pessoa.idade
// console.log(pessoa);

// // SUBSTITUIR UMA PROP

// pessoa.nome = "Felipe"
// console.log(pessoa)




// DESAFIO ESTRUTURA DE DADOS COMPLEXOS ================================================

// Crie um objeto que receba ao menos três propriedades sobre você.
let eu = {
    nome: "Luís",
    idade: 22,
    musica: "MPB"
}
console.log(eu);

// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.lindo = false
console.log(eu);

// Remova uma propriedade desse objeto.
delete eu.lindo 
console.log(eu);

//Mostre no console todas as propriedades desse objeto.
console.log(eu);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.


let cadastro = [
    {
        nome: "Luís",
        idade: 22,
        telefone: 969763862,
        amigos: ["Pacheco", "Rian", "Isabel", "Luan"]
    },
    {
        nome: "Rian",
        idade: 22,
        telefone: 837594834,
        amigos: ["Will", "Bruno", "Kevin", "Gui"]
    },
    {
        nome: "Luan",
        idade: 22,
        telefone: 102940854,
        amigos: ["Renan", "Cicero", "Felipe", "Ledson"]
    },
    {
        nome: "Pedro",
        idade: 22,
        telefone: 194039485,
        amigos: ["Chris", "Italo", "Gudy", "João"]
    }
]
console.log (cadastro);

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);