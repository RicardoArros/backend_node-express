const { check } = require('express-validator');

const { validateResult } = require('../utils/handleValidator');

//
const validateObjectDataCreate = [
  check('name').exists().notEmpty().isLength({ min: 2, max: 50 }),
 

  (req, res, next) => validateResult(req, res, next),
];

//
const validateObjectDataUpdate = [
  check('name').exists().notEmpty().isLength({ min: 2, max: 50 }),
 

  (req, res, next) => validateResult(req, res, next),
];

const validateId = [
  check('id').exists(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateObjectDataCreate, validateObjectDataUpdate };
