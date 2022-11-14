const mongoose = require('mongoose');

const mongooseDelete = require('mongoose-delete');

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

UserScheme.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model("users", UserScheme)