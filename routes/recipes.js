const express = require('express');

const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/recipes');

const {
  validatorCreateItem,
  validatorGetItem,
} = require('../validators/recipes');

const router = express.Router();

/**
 * Listar items
 */
router.get('/', getItems);

/**
 * Ver item
 */
router.get('/:id', validatorGetItem, getItem);

/**
 * Crear un registro
 */
router.post('/', validatorCreateItem, createItem);

/**
 * Actualizar un registro
 */
router.put('/:id', updateItem);

/**
 * Eliminar un registro
 */
router.delete('/:id', deleteItem);

module.exports = router;
