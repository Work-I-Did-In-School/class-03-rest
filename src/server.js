'use strict';

const express = require('express');
const foodRoutes = require('./routes/food.js');

const app = express();

// hook up Resouce routers
app.use(foodRoutes);


module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('app is running'));
  } 
}
