// const http = require('http');
// const numeros =  [48,36];
// const validbr = require('validation-br');

// const app = function(req, res){
//     let cpf = '087.083.464-96';
//     let ehCpf = validbr.isCPF(cpf);
//     console.log('Servidor online');
//     let page =  `<h1 style="color: red">Servidor online ${ehCpf}</h1>`;
//     res.end(page);
// }

// const server = http.createServer(app);
// server.listen(5000);

const express = require('express');
const validbr = require('validation-br');

const app = express();
const port = 5000;

let cpf = '087.083.464-96';
let ehCpf = validbr.isCPF(cpf);
let page = `<h1 style="color: red">Servidor online ${ehCpf}</h1>`;
let alunos = ['pedro', 'joao', 'maria'];
let alunoPage = `<h1 style="color: red">Servidor online ${alunos[1]}</h1>`;

//rotas e metodos http
app.get('/', (req, res) => {
    res.send(page)
});

app.get('/gerar', (req, res) => {
    let numberRandon = Math.floor(Math.random() * 100);
    res.send(`<p>${numberRandon}</p>`);
})

app.get('/alunos', (req, res) => {
    res.send(alunoPage)
});

app.listen(port,function(){
    console.log(`Servidor online ${port}`);
})
