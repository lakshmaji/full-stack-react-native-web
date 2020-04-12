require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const databaseHelper = require('./src/helpers/database');
// const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const winston = require('winston');
const { createLogger } = require('winston');


class App {
  app;
  constructor() {
    this.app = express();
    this.database();
    this.middlewares();
    this.routes();
    this.afterMiddlewares();
  }

  database() {
    databaseHelper.connect();
  }

  middlewares() {
    this.app.use(cors());
    this.app.options('*', cors());
    this.app.use(express.json());
    // this.app.use(bodyParser.json());

    // Place the express-winston logger before the router.
    this.app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));
  }

  afterMiddlewares() {
    // Place the express-winston errorLogger after the router.
    this.app.use(expressWinston.errorLogger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));
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
