const mongoose = require('mongoose');

const { storageModel } = require('../models');

const PUBLIC_URL = process.env.PUBLIC_URL;

// const { matchedData } = require('express-validator');

// const { handleHttpError } = require('../utils/handleError');

// const optionsPaginate = require('../config/paginationParams');

/**
 * Get detail by single row
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const [data] = await storageModel.aggregate([
      {
        $lookup: {
          from: 'storages',
          localField: 'mediaId',
          foreignField: '_id',
          as: 'audio',
        },
      },
      { $unwind: '$audio' },
      {
        $match: {
          _id: mongoose.Types.ObjectId(id),
        },
      },
    ]);

    res.send({ data });
  } catch (e) {
    // handleHttpError(res, e);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const [, options] = optionsPaginate(req);

    const data = await storageModel.paginate({}, options);

    res.send({ data });
  } catch (e) {
    // handleHttpError(res, e);
  }
};

/**
 * Upload and create record with public source
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
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
    // handleHttpError(res, e);
  }
};

/**
 * update detail row
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id, ...body } = req;

    const data = await storageModel.findOneAndUpdate(id, body, {
      new: true,
    });
    res.send({ data });
  } catch (e) {
    // handleHttpError(res, e);
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
    const id = req.id;
    const findData = await storageModel.delete({ _id: id });
    const data = {
      findData: findData,
      deleted: true,
    };

    res.send({ data });
  } catch (e) {
    // handleHttpError(res, e);
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
