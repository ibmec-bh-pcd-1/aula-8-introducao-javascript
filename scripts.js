    //aula inicial de java
    //let          (declarar variavel)
    //const        (declarar constante)
    //console.log  (printar)

    //inicio

//   let nome= "Gabriel";//declarando a variável
//   console.log(nome);
//
//    nome="Laura";//a variavel nome ja foi declarada e pode ser modificada
//    console.log(nome);
//
//    const numero = 10; //não é possível mudar o valor de uma constante
//    console.log(numero);
    //ripos de dados primitivos null, undefined, bool, string str, float, int

    //number
//    let n1=10;
//    console.log(typeof(n1));

    //float
//    let n2 = 10.2;
//    console.log(typeof(n2));

    //string
 //   let faculdade = "ibmec";

    //bool
 //   let ehFeriado = false;    //boas praticas: usar letras maiusculas ao declarar uma variavel com duas palavras

    //undefined
 //   let carrinho = undefined;

    //null
 //   carrinho = null;

    //operadores
 //   let novoNumero = 15;
 //   console.log(novoNumero);

 //   novoNumero++;
  //  console.log(novoNumero);

 //   novoNumero += 10;
 //   console.log(novoNumero);

    //operdores logicos == igual(se os valores sao iguais), === extritamente igual(alem dos valores vai olhar se as classes das variáveis sao iguais)
 //   const joaoPedro = 12;
 //   const lucasTerdilene = 19;
 //   const joaoEhMaisVelho = joaoPedro > lucasTerdilene;
 //   console.log(joaoEhMaisVelho);

    // condicionais    if (condicao) { causa }     if, else, else if
  //  if (joaoPedro >= 18){
 //       console.log("liberado")
 //   }
 //   else {
 //       console.log("cadeia")
 //   }
    //estrutura consicional composta &&(and), ||(or)
 //   let idade = 38;
 //   if (idade >= 18 && idade < 65){
 //       console.log("voto obrigatório")
 //   }
 //   else if (idade >=16 && idade < 18){
 //       console.log("voto é facultativo")
 //   }
 //   else if (idade >=65){
 //       console.log("voto facultativo")
 //   }
 //   else{
 //       console.log("nao pode votar")
 //   }



 //EXERCICIO 1
 let nome = "gabriel";
 let idade = 18;
 let cidade = "Belo Horizonte"
 const país = "Brasil";
 console.log(nome);
 console.log(idade);
 console.log(cidade);
 console.log(país);

 //EXERCICIO 2
 const v1 = 10;
 const v2 = 14;
 let soma = undefined;
 soma = (v1 + v2);
 console.log(v1,"+", v2, "=", soma);

 //EXERCICIO 3
 let idade3 = 18;
 if (idade >=18){
    console.log("voce é maior de idade")
 }
 else {
    console.log("voce é menor de idade")
 }

 //EXERCICIO 4
 let temCarteiraDeMotorista = undefined;
 let temCarro = undefined;

 temCarteiraDeMotorista = true;
 temCarro = true;
 if (temCarro==true && temCarteiraDeMotorista==true){
    console.log("voce pode dirigir")
 }
 else{
    console.log("voce nao pode dirigir")
 }

 //EXERCICIO 5
 let nota = undefined;
 nota = 6.5
 if(nota>=7){
    console.log("voce foi aprovado")
 }
 else if (nota>=5 && nota<7){
    console.log("voce esta de recuperacao")
 }
 else{
    console.log("voce foi reprovado")
 }