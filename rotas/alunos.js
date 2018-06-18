const express = require('express');
const router = express.Router();
const path = require("path");
//Rota para consultar alunos
router.get('/', function (req, res) {
    res.sendFile(path.resolve('views/alunos.html'));
});
//Rota para ver aluno
router.post('/', function (req, res) {
    res.send('Aluno Cadastrado!');
});
//Rota para consultar um aluno por id
router.get('/docentes', function (req, res) {
    res.send('Lista de alunos.');
})
module.exports = router;

