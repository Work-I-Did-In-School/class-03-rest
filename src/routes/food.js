'use strict';

const express = require('express');

const router = express.Router();

router.get('/food', getAll);
router.post('/food', create);
router.put('/food', update);
router.delete('/food', remove);

function getAll(req, res) {
  res.send('In Progress');
}

function create(req, res) {
  res.send('In Progress');
}

function update(req, res) {
  res.send('In Progress');
}

function remove(req, res) {
  res.send('In Progress');
}

module.exports = router;
