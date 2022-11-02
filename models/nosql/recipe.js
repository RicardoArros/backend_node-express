const mongoose = require('mongoose');

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
      type: Number,
    },
    author: {
      name: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },

    // cover: {
    //   type: String,
    //   validate: {
    //     validator: (req) => {
    //       return true;
    //     },
    //     message: 'ERROR_URL',
    //   },
    // },

    // duration: {
    //   start: {
    //     type: Number,
    //   },
    //   end: {
    //     type: Number,
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

module.exports = mongoose.model('recipe', RecipeScheme);
