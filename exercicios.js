// 1-Exercício: Criando e manipulando variáveis e constantes
// Crie três variáveis: uma para armazenar seu nome, outra para armazenar sua idade e uma terceira para armazenar sua cidade. Crie também uma constante para armazenar o nome do país onde você mora. Exiba todos os valores no console.

let nome = "Melina";
let idade = 18;
let cidade= "BH";
let pais = "BR"
console.log (nome,idade,cidade,pais)


// 2-Exercício: Manipulando tipos de dados primitivos
// Crie duas variáveis para armazenar dois números e uma para armazenar o resultado da soma desses dois números. Depois, exiba uma mensagem no console com o resultado da soma.

let numero1 = 1
let numero2 = 9
let soma =(numero1+numero2)
console.log (soma)


// 3-Exercício: Condicionais simples
// Crie uma variável para armazenar sua idade. Use uma estrutura condicional para exibir no console uma mensagem informando se você é maior ou menor de idade.

if (age >=18){
    console.log ("Of legal age")
}
else {console.log("Minor")}

// 4-Exercício: Operadores lógicos
// Crie duas variáveis booleanas: temCarteiraDeMotorista e temCarro. Verifique se a pessoa pode dirigir, exibindo uma mensagem apropriada no console. Para dirigir, a pessoa precisa ter carteira de motorista e carro.

let carteira = true
let carro = true

if (idade>=18 && carteira && carro){
    console.log("Pode dirigir")
}
else {console.log("N pode dirigir")}

// 5-Exercício: Condicionais com else if
// Crie uma variável para armazenar a nota de um aluno. Com base nessa nota, exiba se o aluno foi aprovado, está em recuperação ou foi reprovado. Considere:

// Nota maior ou igual a 7: Aprovado
// Nota entre 5 e 6.9: Recuperação
// Nota abaixo de 5: Reprovado

let nota = 6
if (nota<=5){ console.log("Reprovado")}
else if (nota>5 && nota<=6.9)
{console.log("Recuperação")}
else {console.log("Aprovado")}



