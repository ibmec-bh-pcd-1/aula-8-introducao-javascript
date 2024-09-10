# [PCD][Aula 07] Introdução ao JavaScript

JavaScript é uma linguagem de programação de alto nível, interpretada e amplamente utilizada para o desenvolvimento web. Originalmente criada para adicionar interatividade a páginas da web, JavaScript permite que desenvolvedores criem sites dinâmicos e interativos.

## Características do JavaScript

### 1. Execução no Navegador
JavaScript é executado diretamente no navegador dos usuários, o que permite modificar o conteúdo da página sem precisar recarregar o site. Isso torna a navegação mais rápida e interativa.

### 2. Lado do Cliente e do Servidor
- **Lado do Cliente (Client-Side):** A principal aplicação de JavaScript é no lado do cliente, controlando comportamentos de páginas web como animações, validações de formulários e interações com o usuário.
- **Lado do Servidor (Server-Side):** Com a introdução de plataformas como o Node.js, JavaScript também pode ser usado para o desenvolvimento do lado do servidor, permitindo que a mesma linguagem seja usada tanto no front-end quanto no back-end.

### 3. Interatividade e Dinamismo
JavaScript permite:

- Manipulação do DOM (Document Object Model) para alterar ou criar novos elementos na página.
- Controle de eventos, como cliques de botões, envio de formulários e interações com o mouse ou teclado.
- Comunicação assíncrona com servidores por meio de tecnologias como AJAX e Fetch API, possibilitando a atualização de partes da página sem recarregar o site.

### 4. Versatilidade
Além de ser usado para o desenvolvimento web, JavaScript também é aplicado em:

- Desenvolvimento de aplicativos móveis: usando frameworks como React Native.
- Desenvolvimento de jogos: com bibliotecas como Phaser.
- Criação de aplicativos de desktop: com ferramentas como Electron.

### 5. Comunidade e Ecossistema
JavaScript possui um vasto ecossistema de bibliotecas e frameworks, como React, Angular, e Vue.js para front-end, e Express.js para back-end. Essa comunidade ativa contribui para a evolução constante da linguagem e de suas funcionalidades.

### 6. Características Principais
Linguagem baseada em protótipos: Em vez de usar classes, JavaScript usa protótipos para herança.
Dinamicamente tipada: O tipo de uma variável é determinado em tempo de execução, o que torna a linguagem flexível, mas pode ocasionar alguns erros se não for bem gerenciada.

<hr>

## Introduzindo

### 1. Variáveis e Constantes

#### Variáveis (`let`)
No JavaScript, as variáveis são usadas para armazenar valores. Para isso, utilize `let`.

- `let`: Introduzido no ES6, `let` tem escopo de bloco, o que significa que a variável só existe dentro de um bloco específico (como um `if`, `for`, etc.).

  ```javascript
  let cidade = "Belo Horizonte";
  let ano = 2024;
  ```

#### Constantes (`const`)
Constantes são declaradas com a palavra-chave `const` e, uma vez atribuídos, seus valores não podem ser modificados. Elas também possuem escopo de bloco.

```javascript
const PI = 3.14;
const nomeCompleto = "Tamara Simões";
```

### 2. Tipos de Dados Primitivos
Os tipos de dados primitivos são os tipos básicos de valores que você pode armazenar em variáveis ou constantes. Em JavaScript, os principais tipos de dados primitivos são:

- **String**: Representa uma sequência de caracteres.
  
  ```javascript
  let nome = "Tamara";
  ```

- **Number**: Representa valores numéricos (inteiros e de ponto flutuante).

  ```javascript
  let idade = 30;
  let temperatura = 22.5;
  ```

- **Boolean**: Representa valores booleanos (`true` ou `false`).

  ```javascript
  let aprovado = true;
  let maiorDeIdade = false;
  ```

- **Undefined**: Representa uma variável que foi declarada, mas ainda não possui valor atribuído.

  ```javascript
  let altura;
  ```

- **Null**: Representa a ausência de valor intencionalmente.

  ```javascript
  let notaFinal = null;
  ```

### 3. Operadores Aritméticos em JavaScript

| Operador | Descrição                      | Exemplo               | Resultado          |
|----------|--------------------------------|-----------------------|--------------------|
| `+`      | Adição                         | `5 + 3`               | `8`                |
| `-`      | Subtração                      | `10 - 6`              | `4`                |
| `*`      | Multiplicação                  | `4 * 7`               | `28`               |
| `/`      | Divisão                        | `20 / 4`              | `5`                |
| `%`      | Módulo (resto da divisão)      | `10 % 3`              | `1`                |
| `++`     | Incremento (adiciona 1)        | `let a = 5; a++`      | `a = 6`            |
| `--`     | Decremento (subtrai 1)         | `let b = 5; b--`      | `b = 4`            |
| `**`     | Exponenciação (potência)       | `2 ** 3`              | `8`                |


### 4. Operadores Lógicos

Os operadores lógicos são usados para combinar ou inverter condições.

#### Operadores:

- `&&` (E lógico): Verdadeiro se **ambas** as condições forem verdadeiras.
  
  ```javascript
  let idade = 20;
  let temCarteira = true;

  if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir");
  }
  ```

- `||` (OU lógico): Verdadeiro se **pelo menos uma** das condições for verdadeira.

  ```javascript
  let idade = 16;
  let autorizado = true;

  if (idade >= 18 || autorizado) {
    console.log("Pode entrar");
  }
  ```

- `!` (Não lógico): Inverte o valor lógico.

  ```javascript
  let chovendo = false;

  if (!chovendo) {
    console.log("Pode sair para passear");
  }
  ```

### 5. Estruturas Condicionais

As estruturas condicionais são usadas para controlar o fluxo do programa com base em condições.

#### `if`, `else if`, `else`
A estrutura `if` executa um bloco de código se uma condição for verdadeira.

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

Também podemos encadear condições usando `else if` e `else`.

```javascript
let nota = 75;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```
