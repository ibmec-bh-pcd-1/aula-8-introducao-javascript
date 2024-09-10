// let E uma variavel que E possivel ser alterada
let nome ="lucas";
console.log(nome)
nome = "tergilene";
console.log(nome)
// const E uma variavel que nao pode ser alterada, caso ela for alterada ocorrera um erro 
const constante = 19;

// number E classificado como numero inteiro
// tipe of fala o tipo da variavel
let n1 = 10;
console.log(typeof(n1))

// string
let faculdade = "ibmec";
console.log(typeof(faculdade))

// boleano / bool
let EhFeriado = false;

// indefinido / undefined 
let indefinido = undefined;

// operadores
let Numero = 15;
console.log(Numero);
Numero.log++;
console.log(Numero);
Numero += 10;
console.log(Numero)

const joaoPedro = 18;
const joaozin = 13;

const idade = joaoPedro > joaozin
console.log(idade)

// condicionais
if (joaoPedro >= 18) {
    console.log("duvido")
}
else {
    console.log("verdadeiro")
}

// estrutura condicional composta

let idades =17;

if (idades >=18 ) {
    console.log("voto obrigatorio")
}
else if (16 <= idades && idades < 18){
    console.log("voto opicional para jovens entre 16 e 18")
}
else if (idades <= 65){
    console.log("voto opicional para idosos")
}
else {
    console.log("pessoa com idade insuficiente para votar")
}
