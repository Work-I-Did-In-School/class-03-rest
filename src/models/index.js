'use strict';

require('dotenv').config();
// heroku uses this naming convention
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

// We added this to our script, so that we can provide some info about our environement (Dev / test / production)
const NODE_ENV = process.env.NODE_ENV;

// Sequelize lets us create data models, DataType represent the Types of data we can create in SQL
const { Sequelize, DataTypes} = require('sequelize');
const foodModel = require('./food.js');

// analogous to the express()
let sequelize = new Sequelize(DATABASE_URL, NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}: {});

// modify the sequelize object using a model.
const food = foodModel(sequelize,  DataTypes);

module.exports = {
  db: sequelize, // we need to use this in our entry file, and our test file to tell our environments we are preparing to do CRUD.
  food: food,
}
