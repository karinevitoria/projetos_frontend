let pessoa = {
    nome: "Henning",
    idade: "33",
    sexo: "masculino",
    peso: "96"
}

for (let p in pessoa) {
    console.log (`dados da pessoa: ${p}: ${pessoa[p]}`) 
}

console.log(pessoa.idade)