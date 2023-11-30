"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho um perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho um perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['João', 'Maria', 'Moão', 'Jaria'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var jaria = alunos2.find(function (item) {
  return item.nome == 'Jaria';
});
console.log(jaria);
var indiceDaJaria = alunos2.findIndex(function (item) {
  return item.nome == 'Jaria';
});
console.log(indiceDaJaria);
alunos2.push({
  nome: 'Luciel',
  curso: 'Backend'
});
var todosOsAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosOsAlunosSaoDeFrontend);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var numeros = [10,, 20, 30,, 10];
var soma = numeros.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < numeros.length; _i++) {
  somaComFor += numeros[_i];
}
console.log(somaComFor);
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, ", ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);