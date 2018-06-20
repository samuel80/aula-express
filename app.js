const express = require('express');
const rotasCursos = require("./rotas/cursos.js")
const rotasAlunos = require("./rotas/alunos.js")
const rotasProfessores = require("./rotas/professores.js")
const logger = require('morgan');
const app = express();
app.use(logger('dev'));
app.use('/cursos', rotasCursos)
app.use('/alunos', rotasAlunos)
app.use('/professores', rotasProfessores)


app.listen(3000, function () {
    console.log('App rodando na porta 3000')
})