const express = require("express");// inportação do pacote 
const app = express();//instanciando o express 

const alunos = [
    {
        nome: 'Ana Flavia',
        idade: 19
    },

    {
        nome: 'Guilherme',
        idade: 23 
    },

    {
        nome: 'Cesar Prado',
        idade: 25
    },

    {
        Nome: 'Dara Costa',
        idade: 24
    },
]



app.get('/api/v1/alunos', function(req, res){ // endereço da requisição 
    res.send(alunos);
})

app.listen(3000); //execução do servidor
