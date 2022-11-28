const engine = process.env.DB_ENGINE || null;

const pathModel = engine === 'mysql' ? './sql' : './nosql';

console.log('X', pathModel);

const models = {
  userModel: require(`${pathModel}/users`),
  storageModel: require(`${pathModel}/storage`),
  recipeModel: require(`${pathModel}/recipes`),
  ingredientModel: require(`${pathModel}/ingredients`),
  instructionModel: require(`${pathModel}/instructions`),
};

// function setupModels(sequelize){
//   try {
//     User.init(UserSchema, User.config(sequelize));
//     Customer.init(CustomerSchema, Customer.config(sequelize));
//     Product.init(ProductSchema, Product.config(sequelize));
//     Category.init(CategorySchema, Category.config(sequelize));
//     Order.init(OrderSchema, Order.config(sequelize));
//     OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

//     // Associations
//     User.associate(sequelize.models);
//     Customer.associate(sequelize.models);
//     Category.associate(sequelize.models);
//     Product.associate(sequelize.models);
//     Order.associate(sequelize.models);


//   } catch (error) {
//     throw new Error(error);
//   }
// };

module.exports = {models};
