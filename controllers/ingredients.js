const mongoose = require('mongoose');

const { models, ingredientModel } = require('../models');

const { matchedData, body } = require('express-validator');

const { handleHttpError } = require('../utils/handleError');

// const optionsPaginate = require('../config/paginationParams');

/**
 * Get detail by single row
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    req = matchedData(req);

    const { id } = req;

    const data = await ingredientModel.findOneData(id);

    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await ingredientModel
      .findAll({
        //raw: true,
        // where: {
        //   [Op.and]: [{ is_deleted: false }, { is_active: true }],
        // },
        //attributes: ['id', 'name', 'category']
      })
      // .then((ingredientes) => {
      //   const resultado = JSON.stringify(ingredientes);

      //   console.log(resultado);
      // });

    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};

/**
 * Upload and create record with public source
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);

    const data = await models.ingredientModel.create(body);

    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS');
  }
};

/**
 * update detail row
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);

    const data = await models.ingredientModel.findOneAndUpdate(id, body);

    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_UPDATE_ITEMS');
  }
};

/**
 * delete row
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);

    const { id } = req;

    const data = await models.ingredientModel.delete({ _id: id });

    res.send({ data });
  } catch (e) {
    console.log(e);

    handleHttpError(res, 'ERROR_DELETE_ITEM');
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
