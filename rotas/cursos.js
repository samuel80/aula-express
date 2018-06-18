const express = require('express');
const router = express.Router();
const path = require("path");
//Rota para consultar cursos
router.get('/', function (req, res) {
    res.sendFile(path.resolve('views/cursos.html'));
});
//Rota para cadastrar curso
router.post('/', function (req, res) {
    res.send('Curso cadastrado!');
});
//Rota para consultar um aluno por id
router.get('/docentes', function (req, res) {
    res.send('Lista de docentes.');
})
module.exports = router;
