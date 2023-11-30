"use strict";

var _console;
//rest
function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;

  //console.log(arguments)
  //return a + b;
}

console.log(somar(10, 20));
function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(10, 20, 30));

//spread
var numeros = [1, 2, 3, 4];
(_console = console).log.apply(_console, numeros);
var animaisDoZooUm = ['tigre', 'tartaruga', 'pavão', 'raposa'];
var animaisDoZooDois = ['cobra', 'urso', 'leão,', 'macaco'];
var animaisDoZoo = animaisDoZooUm.concat(animaisDoZooDois);
console.log(animaisDoZoo);