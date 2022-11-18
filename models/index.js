const engine = process.env.DB_ENGINE || null;

const pathModel = engine === 'mysql' ? './sql' : './nosql';

const models = {
  userModel: require(`${pathModel}/users`),
  storageModel: require(`${pathModel}/storage`),
  recipeModel: require(`${pathModel}/recipes`),
  ingredientModel: require(`${pathModel}/ingredients`),
  instructionModel: require(`${pathModel}/instructions`),
};

module.exports = models;
