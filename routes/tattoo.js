const express = require('express');
const router = express.Router();
const tattooController = require('../controllers/tattooController');

// Ruta para agregar un nuevo tatuaje
router.post('/', tattooController.addTattoo);

// Ruta para obtener todos los tatuajes
router.get('/', tattooController.getAllTattoos);

// Ruta para obtener un tatuaje por ID
router.get('/:id', tattooController.getTattooById);

// Ruta para actualizar un tatuaje
router.put('/:id', tattooController.updateTattoo);

// Ruta para eliminar un tatuaje
router.delete('/:id', tattooController.deleteTattoo);

module.exports = router;
