//rest
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;

    //console.log(arguments)
    //return a + b;
}

console.log(somar(10, 20))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

//spread
const numeros = [1,2,3,4]
console.log(...numeros)

const animaisDoZooUm = ['tigre', 'tartaruga', 'pavão', 'raposa']
const animaisDoZooDois = ['cobra', 'urso', 'leão,', 'macaco']

const animaisDoZoo = animaisDoZooUm.concat(animaisDoZooDois)

console.log(animaisDoZoo)