const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ['guest', 'cooker', 'admin'],
      default: 'guest',
    },
    // image: {
    //   type: String,
    // },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserScheme)