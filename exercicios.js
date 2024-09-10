let nome ="Lucas Tergilene";
let cidade = "bh";
let idade = 19;
let numero= 10;
let resultado = numero + idade
console.log(resultado)
if (idade <= 18) {
    console.log("voce E maior de idade")
}
else {
    console.log("voce E menor de idade")
}
let temCarro=true;
let temCarteira=true;
if (!temCarro || !temCarteira){
    console.log("pessoa nao pode dirigir")
}
else if (temCarro || temCarteira){
    console.log("pessoa pode dirigir")
}
let nota=7;
if (nota<=7 && nota < 10){
    console.log("aluno aprovado")
}
else if (nota < 5 && nota >6.9) {
    console.log("aluno em recuperacao")
}
else if (nota <= 0 && nota < 5){
    console.log("aluno reprovado")
}
else {
    console.log("valor de nota invalido")
}