class Pokemon {
    hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.hp -= 10;
    }
}

class pikachu extends Pokemon {
    constructor() {
        super('pikashu', 'eletrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com shoque do trovao`)
    }
}

const pikachuDoAsh = new Pokemon()

pikachuDoAsh.recebeuAtaque()

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

const pikachu = new Pokemon('pikachu', 'eletrico')
//pikachu.atacar('choque do trovao')
//pikachu.nome = 'pikachu'
//pikachu.tipo = 'eletrico'

console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof pikachu);