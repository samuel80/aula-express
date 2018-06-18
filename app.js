const express = require('express');
const rotasCursos = require("./rotas/cursos.js")
const rotasAlunos = require("./rotas/alunos.js")
const app = express();
app.use('/cursos', rotasCursos)
app.use('/alunos', rotasAlunos)


app.listen(3000, function () {
    console.log('App rodando na porta 3000')
})