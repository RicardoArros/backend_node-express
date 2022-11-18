const express = require('express');

const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/instructions');

// const authMiddleware = require('../middleware/auth');
// const authRolMiddleware = require('../middleware/rol');

const {
  validateId,
  validateObjectDataCreate,
  validateObjectDataUpdate,
} = require('../validators/instructions');

const router = express.Router();

/**
 * Listar los items
 */
router.get('/', getItems);

/**
 * Obtener detalle de item
 */
router.get('/:id', validateObjectDataUpdate, getItem);

/**
 * Crear un registro
 */
router.post('/', validateObjectDataCreate, createItem);

/**
 * Actualizar un registro
 */
router.put('/:id', updateItem);

/**
 * Eliminar un registro
 */
router.delete('/:id', deleteItem);

module.exports = router;
