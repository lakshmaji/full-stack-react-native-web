const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

const db = require('./db');
global.__root = __dirname + '/';

app.get('/', function (req, res) {
  res.status(200).send({ message: 'API' });
});
app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

var PostController = require(__root + 'post/PostController');
app.use('/api/posts', PostController);

module.exports = app;