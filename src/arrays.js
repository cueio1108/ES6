const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho um perfil na rede social: ${redesSociais[i]}`)
}
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho um perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['João', 'Maria', 'Moão', 'Jaria'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

const jaria = alunos2.find(function(item) {
    return item.nome == 'Jaria'
})

console.log(jaria)

const indiceDaJaria = alunos2.findIndex(function(item) {
    return item.nome == 'Jaria'
})

console.log(indiceDaJaria)

alunos2.push({
    nome: 'Luciel',
    curso: 'Backend'
})

const todosOsAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosOsAlunosSaoDeFrontend)

const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend)

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend'
}
const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

const numeros = [10,, 20, 30,, 10]

const soma = numeros.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador
}, 0)

console.log(soma)

let somaComFor = 0;

for (let i = 0; i < numeros.length; i++) {
    somaComFor += numeros[i];
}

console.log(somaComFor)

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}, `
    return acumulador
}, '')
console.log(nomeDosAlunos)