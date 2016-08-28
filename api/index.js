const express = require('express');

const api = express.Router(); // eslint-disable-line new-cap

api.get('/greeting', (req, res) => {
  res.json({ text: 'hello!' });
});

module.exports = api;
