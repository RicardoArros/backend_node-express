const { sequelize } = require('../../config/mysql');

const { DataTypes } = require('sequelize');

const User = sequelize.define(
  'users',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM(['guest', 'cooker', 'admin']),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
