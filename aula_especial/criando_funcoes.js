// básico função

// function chamaNome(parametros, argumentos) {
    //     // return "Henning" //retorna algo quando é chamada (pode ser armazenado num variável)
    //     nome = "Summer" // altera o vaor de uma variável (não tem retorno)
    // }
    
    // let nome = "Henning"
    
    // console.log('O nome antes é', nome)
    // chamaNome()
   
 // console.log(`O nome depois é ${nome}`)

 // ===================================== função fetch etc ===============================================

 // import fetch from 'node-fetch';
    
// // var cep = '54720345';


    
// async function pegarCep(cep) {
//     const response = await fetch(`http://viacep.com.br/ws/${cep}/json`);
//     const data = await response.json();
//     console.log(data)    
//     }

// pegarCep('54720200')

//================================= função dentro de função e passando função por parametro ===========================================

// function soma(n1,n2, fn, fnPessoa){
//     var nome = 'Henning'
//     let soma = n1 + n2
//     let divisao = fn(soma,8)
//     return fnPessoa(nome, divisao)
// }

// function dividir(n1, n2){
//     return n1 / n2
// }

// // var nome

// function pessoaReceber(nome, valor){
//     console.log(`O nome é ${nome}, e o valor é ${valor}`)
// }

// soma(25,75, dividir, pessoaReceber)
// // console.log(dividir(36,8))

function somar(a,b){
    return a+b
}
function dividir(a,b){
    return a/b
}
function multiplicar(a,b){
    return a*b
}
function subtrair(a,b){
    return a-b
}

const calcular={
    adicao: somar,
    subtracao: subtrair,
    multiplicao: multiplicar,
    divisao: dividir
}

console.log(calcular.adicao(2,3))

Y