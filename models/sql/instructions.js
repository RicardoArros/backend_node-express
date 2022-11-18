const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Instructions = sequelize.define(
  'instructions',
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
    instruction_time: {
      type: DataTypes.INTEGER,
    },
    instruction_number: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Instructions;
