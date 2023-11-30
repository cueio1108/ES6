let meuMap = new Map();
meuMap.set("nome", "miguel");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("nome"))

//meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave)
}

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack")

console.log(meuMap)

const cpfs = new Set()

cpfs.add('92811369023')
cpfs.add('01957537043')
cpfs.add('59654996049')

console.log(cpfs)

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['pedro', 'maria', 'joao', 'erik', 'mariana', 'julia', 'pedro', 'erik']

const arrayComoSet = new Set([...array])

const arrayComoSetSemDuplicatas = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arrayComoSetSemDuplicatas)