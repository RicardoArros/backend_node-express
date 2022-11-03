const express = require('express');

const { getItems, getItem, createItem } = require('../controllers/recipes');

const { validatorCreateItem } = require('../validators/recipes')

const router = express.Router();

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;
