require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const databaseHelper = require('./src/helpers/database');
// const bodyParser = require('body-parser');


class App {
  app;
  constructor() {
    this.app = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    databaseHelper.connect();
  }

  middlewares() {
    this.app.use(cors());
    this.app.options('*', cors());
    this.app.use(express.json());
    // this.app.use(bodyParser.json());
    // this.app.use(cors());

    // // this.app.options('*', cors());
  }

  routes() {
    this.app.get('/', function (req, res) {
      res.status(200).send({ message: 'API' });
    });
    this.app.get('/api', function (req, res) {
      res.status(200).send({ message: 'API' });
    });

    this.app.use('/api', routes);

  }
}

module.exports = new App().app;
