// //REVISAO DE ARRAY

// //Array é uma lista ed dados representado pelos []
// //TEM COLCHETE É ARRAY


// // index =      0           1           2
// let meses = ["Janeiro", "Fevereiro", "Março"]
// let numero = [1, 2, 3, 4]
// let random = ["Janeiro", 1, "Fevereiro", 2]

// console.log(meses[1]);

// //unshift() é o método para ADD um valor no INÍCIO da array
// let tecnologias = ["JavaScript", "Java", "C++"]
// tecnologias.unshift("Python")
// console.log(tecnologias);

// //push() método para ADD valor no FINAL da array

// let estados = ["Rio de Janeiro", "Bahia", "Ceará", "Amazonas"]
// estados.push("Pernambuco")
// console.log(estados);

// //shift() é o método para REMOVER o PRIMEIRO valor de um array

// let paises = ["Inglaterra", "Brasil", "Chile", "Paraguai"]
// paises.shift()
// console.log(paises);

// //pop é o método para REMOVER o ÚLTIMO valor de um array

// let alunos = ["Rian", "Welder", "Luccas", "Maria"]
// alunos.pop()
// console.log(alunos);

// //splice (x, y) é usado para REMOVE, ADICIONAR ou SUBSTITUIR algum elemento de um array
// // 1o valor: índice do item a ser removido, adicionado ou substituido (POSIÇÃO!!!)
// // 2o valor: quantidade de itens a serem removidos

// //REMOVER (SPLICE)

// let cores = ["Verde", "Amarelo", "Azul", "Branco"]
// cores.splice(1, 1)
// console.log(cores);

// //ADICIONAR (SPLICE)

// let dogs = ["vira-lata caramelo", "Lhasa Apso", "Dogo Argentino", "ChowChow", "Pinscher"]
// dogs.splice(2, 0, "Pitbull")
// console.log(dogs);

// //SUBSTITUIR (SPLICE)

// let times = ["Vasco", "Grêmio", "Fluminense"]
// times.splice(1, 1, "Botafogo")
// console.log(times);


// //sort() é o método para organizar em ordem alfabetica ou numerica

// let nomes = ["Rian", "Isabel", "Marcus", "Ana", "Welder"]
// nomes.sort()
// console.log(nomes);

// let num = [3, 2, 6, 7, 9, 1]
// num.sort()
// console.log(num);

// let numDois = [1, 3, 2, 6, 7, 9, 120, 900]
// numDois.sort(function(a, b) {
//     return a - b
// })
// console.log(numDois);

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



// ===================================================================== DESAFIO DE ARRAY

// Crie um array que receba 5 itens e exiba no console.
let brabos = ["RolinhaF", "Pacheco", "Rian", "Chefe", "Luan"]
console.log(brabos);
// Utilize um método para adicionar um nome ao inicio do array.
brabos.unshift("Eu")
console.log(brabos);
// Utilize um método para remover o último nome do array.
brabos.pop()
console.log(brabos);
// Utilize um método para adicionar dois nomes ao fim do array.
brabos.splice(5, 2, "Renan", "Felipe")
console.log(brabos);
// Utilize um método para remover o primeiro nome do array.
brabos.shift()
console.log(brabos);



// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers);
numbers.sort()
console.log(numbers);




