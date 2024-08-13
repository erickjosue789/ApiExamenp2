var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Materia = require('../models').Materia;
const Area = require('../models').Area;

/*
    Ruta de acceso: /api/AllAreas/json
*/

//GET-All Consultar datos de materias mostrando el nombre del area respectiva.
router.get('/AllMaterias/json', function (req, res, next) {
    Materia.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        },
        include: [{
            model: Area,
            attributes: ['nombre'],
            through: { attributes: [] }
        }],
    })
    .then(materias => { res.json(materias); })
    .catch(error => res.status(400).send(error))
});


//GET-All Consulta de áreas (necesario para colocar un combo en la vista antes de guardar materias)
router.get('/AllAreas/json', function (req, res, next) {
    Area.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        },
    })
    .then(areas => { res.json(areas); })
    .catch(error => res.status(400).send(error))
});

//Guardar datos en la base de datos para la tabla
router.post('/guardar', function (req, res, next) {
    let {nombre, descripcion, creditos, id_area } = req.body;
    Materia.create({
        nombre: nombre,
        descripcion: descripcion,
        creditos: parseInt(creditos),
        id_area: id_area,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(materia => {
        res.json(materia);
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;