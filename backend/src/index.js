const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-4mu9f.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); // Linha para definir qual linguagem vai ser utilizada nas routes
app.use(routes);

/* Principais methods HTTP que irão ser utilizados:
    get - quer dizer que estou buscando uma info, 
    post - quando estou querendo criar uma info, 
    put - quando quero editar uma info, 
    delete - quando quero deletar uma info 
*/

/* Tipos de parametros:
    Query Params - request.query (Utilizados em filtros, ordenação, paginação) 
    Route Params - request.params (Identificar um recurso no PUT ou DELETE)
    Body - request.body (Dados para criação ou alteração de um registro)
*/

app.listen(3333);