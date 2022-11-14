const mongoose = require('mongoose');

const mongooseDelete = require('mongoose-delete');

const RecipeScheme = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    country: {
      type: String,
    },
    season: {
      type: String,
    },
    ingredients_quantity: {
      type: Number,
    },
    preparation_time: {
      type: String,
    },
    author: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      type: String,
    },
    // instructions: [
    //   {
    //     title: {
    //       type: String,
    //     },
    //     description: {
    //       type: String,
    //     },
    //     time: {
    //       type: String,
    //     },
    //   },
    // ],

    // cover: {
    //   type: String,
    //   validate: {
    //     validator: (req) => {
    //       return true;
    //     },
    //     message: 'ERROR_URL',
    //   },
    // },

    // mediaId: {
    //   type: mongoose.Types.ObjectId,
    // },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);

RecipeScheme.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('recipes', RecipeScheme);
