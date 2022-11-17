const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

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
    preparation_time: {
      type: DataTypes.STRING
    },
    duration: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM(['guest', 'cooker', 'admin']),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Recipes;
