// EXERCICIOS

// 1:

let nome = "joão";
console.log(nome);

let idade = 18;
console.log(idade);

let cidade = "belorizonte";
console.log(cidade);

const pais = "brasil";
console.log(pais);

// 2:

let n1 = 12;
let n2 = 23;
let soma = n1 + n2;
console.log(soma,"=", n1,"+",n2);

// 3:

let maiorOuMenor = 15;
if(maiorOuMenor>=18){
    console.log("Maior de idade");
}
else{
    console.log("Menor de idade");
}

// 4:

let temCarteiraDeMotorista = true;
let temCarro = true;

if(temCarteiraDeMotorista === true && temCarro === true){
    console.log("Pode dirigir.");
}
else if(temCarteiraDeMotorista === true && temCarro === false || temCarteiraDeMotorista === false && temCarro === true || temCarteiraDeMotorista === false && temCarro === false){
    console.log("Não pode dirigir.");
}

// 5:

let notaAluno = 8;
if (notaAluno>=7){
    console.log("Aprovado");
}
else if(notaAluno>=5 && notaAluno<7){
    console.log("Recuperação");
}
else{
    console.log("Reprovado");
}