// const http = require('http');
// const {isCPF} = require('validation-br');

// num1 = 18;
// num2 = 38;
// const app = function(req, res){
//     console.log('Servidor online');
//     let page = `<h1 style="color: red" >Estou no servidor ${isCPF('04822983404')} ${num1 +num2}</h1>`;
//     res.end(page);
// }

// const server = http.createServer(app);
// server.listen(5000);

const express = require('express');
const fetchUrl = require('fetch').fetchUrl;
const axios = require('axios')
const app = express();
const port = 5000;

let page = `<h1 style="color: red" >Estou no servidor</h1>`;

app.get('/', (req, res) => {
    res.send(page)
})

app.get('/alunos', (req, res) => {
    let data;
    // fetchUrl('https://api-server-senac.herokuapp.com/alunos&#39;, function(error, meta, body){
    //     data = body.toString();
    //     res.send(data);
    // })
    axios.get('https://api-server-senac.herokuapp.com/alunos&#39;)
    .then(function(response){
        data = response.data;
        res.send(data);
    })
    .catch(function(error){
        console.log(error);
    })
})


app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
})