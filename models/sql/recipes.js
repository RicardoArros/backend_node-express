const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');
const Storage = require('./storage');

const Recipes = sequelize.define(
  'recipes',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.STRING,
    },
    ingredients_qty: {
      type: DataTypes.INTEGER,
    },
    instructions_qty: {
      type: DataTypes.INTEGER,
    },
    preparation_time: {
      type: DataTypes.STRING,
    },
    imgId: {
      type: DataTypes.STRING,
    },
    // duration: {
    //   type: DataTypes.STRING,
    // },
    // role: {
    //   type: DataTypes.ENUM(['guest', 'cooker', 'admin']),
    // },
  },
  {
    timestamps: true,
  }
);


/**
 * Implementando modelo personalizado
 */

Recipes.findAllData = function () {
  Recipes.belongsTo(Storage, {
    foreignKey: 'imgId',
    as: 'img'
  });

  return Recipes.findAll({ include: 'img' });
};

Recipes.findOneData = function (id) {
  Recipes.belongsTo(Storage, {
    foreignKey: 'imgId',
    as: 'img'
  });

  return Recipes.findOne({ where: {id}, include: 'img' });
};


module.exports = Recipes;
