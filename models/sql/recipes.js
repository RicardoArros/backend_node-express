const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Storage = require('./storage');
const Ingredient = require('./ingredients');

const Recipes = sequelize.define(
  'recipes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
  },
  {
    timestamps: true,
  }
);

/**
 * Implementando modelo personalizado
 */

// Storage
Recipes.findAllData = function () {
  Recipes.belongsTo(Storage, {
    foreignKey: 'imgId',
    as: 'img',
  });

  return Recipes.findAll({ include: 'img' });
};

Recipes.findOneData = function (id) {
  Recipes.belongsTo(Storage, {
    foreignKey: 'imgId',
    as: 'img',
  });

  return Recipes.findOne({ where: { id }, include: 'img' });
};

// Ingredient
Recipes.hasMany(Ingredient, {
  foreinkey: 'ingredientId',
  sourceKey: 'id',
});
Ingredient.belongsTo(Recipes, { foreinkey: 'ingredientId', targetId: 'id' });

module.exports = Recipes;
