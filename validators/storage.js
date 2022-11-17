const { check } = require('express-validator');

const { validateResult } = require('../utils/handleValidator');


//
const validatorGetItem = [
  check('id').exists().notEmpty(),

  (req, res, next) => validateResult(req, res, next),
];

//
// const validateId = [
//   check('id').exists(),
//   (req, res, next) => {
//     validateResult(req, res, next);
//   },
// ];

module.exports = { validatorGetItem };
