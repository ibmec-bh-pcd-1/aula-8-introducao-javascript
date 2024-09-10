// // Comentário

// //let e const

// let nome1 = 'João';

// // console.log(nome);

// nome1 = "Laura";
// console.log(nome1);

// // number

// let n1 = 25;
// console.log(typeof(n1));

// // string   
// let faculdade = "Ibmec";

// // boolean
// let aprovado = true;

// // undefined
// let iphone= undefined;

// // null
// let sobrenome = null;

// //operadores 
// let novonumero = 10;
// console.log(novonumero);

// novonumero++;
// console.log(novonumero);

// novonumero--;
// console.log(novonumero);

// novonumero += 5;
// console.log(novonumero);

// //comparação
// const joao = 10;
// const laura = 9;

// const resultado = joao == laura;
// console.log(resultado);

// const resultado2 = joao === laura;
// console.log(resultado2);

// //estrutura condicional: simples

// if (joao === laura) {
//     console.log("Iguais");
// }
// else {
//     console.log("Diferentes");
// }

// //estrutura condicional: composta

// if (joao == laura) {
//     console.log("Iguais");
// }
// else if (joao > laura) {
//     console.log("João é maior");
// }
// else {
//     console.log("Laura é maior");
// }


// exercício 1
let nome = "Lucas";
let idade = 18;
let cidade = "Belo Horizonte";
const pais = "Brasil";

console.log(nome, idade, cidade, pais);

// exercício 2
let numero1 = 10;
let numero2 = 20;

let soma = numero1 + numero2;
console.log("A soma é de:",soma);

// exercício 3
idade = 18;
const maioridade = 18;

if (idade >= maioridade) {
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}

// exercício 4

let temCarro = true;
let temCarteiraDeMotorista = false;

if (temCarro && temCarteiraDeMotorista) {
    console.log("Pode dirigir");
}
else {
    console.log("Não pode dirigir");
}

// exercício 5

let nota= 8;

if (nota >= 7) {
    console.log("Aprovado");
}
else if (nota>=5 && nota<7) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}

