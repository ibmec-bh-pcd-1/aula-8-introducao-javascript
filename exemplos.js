// LET E CONST

let nome = "Marcello";
console.log(nome);

nome = "Lucas";
console.log(nome);

const numero = 10;
console.log(numero)

 
//TIPOS DE DADOS PRIMITIVOS 

//NUMBER
let n1 = 10;
console.log(typeof (n1))

//float
let n2 = 10.2;
console.log(typeof (n2)) 

//string
let faculdade = "Ibmec";

//bool
let ehFeriado = false;

//undefined
let carrinho = undefined;
//null
let iphone = null;

//OPERADORES

let novoNumero = 15
console.log(novoNumero);

novoNumero--;
console.log(novoNumero);
novoNumero++;
console.log(novoNumero);

novoNumero += 10; //novoNumero = novoNumero + 10 
console.log(novoNumero);

//OPERADORES LOGICOS

const joaoPedro = 12;
const Lucas = 19;

const joaoEhMaisVelho = joaoPedro > Lucas;
console.log(joaoEhMaisVelho) 

//estrutura condicional: simples
if (joao === laura){
    console.log("iguais");
}
else {
    console.log("diferentes");
}

//estrutura condicional: composta
let idade = 36;

if (idade >= 18 && idade <65 ) {
    console.log("voto obrigatorio");
}
else if(idade >= 16 && idade < 18) {
    console.log("voto facultativo");
}
else if (idade >= 65) {
    console.log("voto facultativo");
}
else {
    console.log("não vota");
}