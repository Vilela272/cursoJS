/*
Guilherme Vilela Moreira tem 20 anos, pesa 90 kg
tem 1.74 de altura e seu IMC é de 29.72651605231867
Guilherme Vilela nasceu em 1999
*/
const nome = 'Guilherme Vilela';
const sobrenome = 'Moreira';
const idade = 21;
const peso = 90;
const alturaEmM = 1.74;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - idade
// template strings

console.log(nome + ' ' + sobrenome + ' ' + 'tem' + ' ' + idade + ' ' + 'anos, pesa' + ' ' + peso + ' ' +'kg');
console.log('tem' + ' ' + alturaEmM + ' ' + 'de altura e seu IMC é de' + ' ' + imc);
console.log(nome + ' ' + sobrenome + ' ' + 'nasceu em' + ' ' +anoNascimento);
