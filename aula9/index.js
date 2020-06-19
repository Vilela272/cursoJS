// ECMAScript 2015 (ES6) JavaScript
var nome = "Guilherme";
console.log(nome);

let outroNome = "Guilherme A";
console.log(outroNome);

// Stirng
const nomeNovo = "Guilherme";
const nome1 = 'Gustavo';
const nome2 = `Marcus`;

//number
const num1 = 10;
const num2 = 10.50;

// Undefined/null - não aponta para local nenhum na memória
let nomeAluno; 
let sobrenomeAluno = null;

//boolean - 
const igual = true;
const diferente = false;

if (igual){
    console.log("é verdadeiro");
} else {
    console.log("é falso");
}

// Typeof
console.log(typeof igual);
console.log(typeof nomeNovo);

//Array
const a = [1, 2];
const b = a;

console.log(a, b);
b.push(3);
console.log(a, b);
