const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Ingredient = sequelize.define(
  'ingredients',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Ingredient.sync({ force: true });

module.exports = Ingredient;
