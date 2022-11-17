const { check } = require('express-validator');

const { validateResult } = require('../utils/handleValidator');

//
const validateObjectDataCreate = [
  check('title').exists().notEmpty().isLength({ min: 3, max: 50 }),
  check('description').exists().notEmpty().isLength({ min: 5, max: 255 }),
  check('category').exists().notEmpty().isLength({ min: 3, max: 25 }),
  check('country').exists().notEmpty().isLength({ min: 3, max: 25 }),
  check('season').exists().notEmpty().isLength({ min: 3, max: 25 }),
  check('ingredients_quantity').exists().notEmpty(),

  (req, res, next) => validateResult(req, res, next),
];

//
const validateObjectDataUpdate = [
  check('title').exists().notEmpty().isLength({ min: 3, max: 50 }),
  check('description').exists().notEmpty().isLength({ min: 5, max: 255 }),
  check('category').exists().notEmpty().isLength({ min: 3, max: 25 }),
  check('country').exists().notEmpty().isLength({ min: 3, max: 25 }),
  check('season').exists().notEmpty().isLength({ min: 3, max: 25 }),
  check('ingredients_quantity').exists().notEmpty(),

  (req, res, next) => validateResult(req, res, next),
];

const validateId = [
  check('id').exists().isMongoId(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateObjectDataCreate, validateObjectDataUpdate };
