let nome = "Mupet";
console.log("O nome é:", nome)

nome = "Tulio";
console.log(nome);

const numero = 10;
console.log(numero)

let faculdade = 'ibmec';


let ehferiado = false;

let carrinho = undefined

carrinho = null

let novoNumero = 15
console.log(novoNumero)

novoNumero +=10;
console.log(novoNumero)

const joaoPedro = 12;
const marcosRocha = "19";

const joaoEhMaisVelho = joaoPedro > marcosRocha
console.log(joaoEhMaisVelho)


if (joaoPedro>=18) {
    console.log("Duvido........")
}
else{
    console.log("Verdadeiro")
}

let idade = 36;

if (idade >= 18 && idade < 65){
    console.log("Voto obrigatório")
}
else if (idade >= 16 && idade < 18 || idade >= 65){
    console.log("Voto facultativo")
}
else{
    console.log("Vai dormir bebê!")
}
