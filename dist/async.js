"use strict";

function funcaoMuitoPesada() {
  execucoes = 0;
  for (var i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}
console.log("in");