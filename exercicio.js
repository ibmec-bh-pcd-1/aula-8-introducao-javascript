// Exercício: Criando e manipulando variáveis e constantes
let nome = "Laura";
let idade = 19;
let cid = "BH";
const pais = "Brasil"; 
console.log (nome, idade, cid, pais);

// Exercício: Manipulando tipos de dados primitivos
let num1 = 2;
let num2 = 5;
let som = (num1 + num2);
console.log (som);

//Exercício: Condicionais simples
if (idade >= 18){
    console.log("Maior de idade")
}
else {console.log("Menor de idade")};

//Exercício: Operadores lógicos
let temCarteiraDeMotorista = true
let temCarro = true

if (idade>=18 && temCarteiraDeMotorista && temCarro){
    console.log("Pode dirigir")
}
else {console.log("Não pode dirigir")}

//Exercício: Condicionais com else if
let nota = 6
if (nota<=5){ console.log("Reprovado")}
else if (nota>5 && nota<=6.9)
{console.log("Recuperação")}
else {console.log("Aprovado")}