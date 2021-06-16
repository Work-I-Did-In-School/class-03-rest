'use strict';

const express = require('express');
const cors = require('cors');
const foodRoutes = require('./routes/food.js');

const app = express();

app.use(cors());
app.use(express.json());

// hook up Resouce routers
app.use(foodRoutes);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('app is running'));
  } 
}
