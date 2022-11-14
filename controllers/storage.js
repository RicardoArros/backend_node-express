const mongoose = require('mongoose');
const { matchedData } = require('express-validator');
const fs = require('fs');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
// const optionsPaginate = require('../config/paginationParams');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Get detail by single row
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);

    const data = await storageModel.findById(id);

    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_DETAIL_ITEMS');
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});

    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_LIST_ITEMS');
  }
};

/**
 * Upload and create record with public source
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body, file } = req;

  console.log(file);

  try {
    // req = matchedData(req);
    // console.log(req);

    const { body, file } = req;

    console.log(file);

    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };

    const data = await storageModel.create(fileData);

    res.send({ data });

    // req = { a: 1 };
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * update detail row
 * @param {*} req
 * @param {*} res
 */
// const updateItem = async (req, res) => {
//   try {
//     req = matchedData(req);
//     const { id, ...body } = req;

//     const data = await storageModel.findOneAndUpdate(id, body, {
//       new: true,
//     });
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, e);
//   }
// };

/**
 * delete row
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const {id} = matchedData(req);

    const dataFile = await storageModel.findById(id);
    await storageModel.delete({ _id: id });

    const {filename} = dataFile;

    const filePath = `${MEDIA_PATH}/${filename}`;

    //fs.unlinkSync(filePath);   
    
    const data = {
      filePath,
      deleted: true,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = { getItems, getItem, createItem, deleteItem };
