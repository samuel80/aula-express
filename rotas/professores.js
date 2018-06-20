const express = require('express');
const router = express.Router();
const path = require("path");
//Rota para consultar professores
router.get('/', function(req, res){
    res.sendFile(path.resolve('views/professores.html'));
});
//Rota para ver Professores
router.post('/', function(res, req){
    res.send('Professor Cadastrado!');
});
//Rota para consultar um Professor por id
router.get('/docentes', function (req, res) {
    res.send('Lista de alunos.');
});
module.exports = router;
