const express = require('express');

const AuthController = require('./auth/AuthController');
const UserController = require('./user/UserController');
const PostController = require('./post/PostController');

const routes = new express.Router();
var VerifyToken = require('./auth/VerifyToken');

routes.post('/auth/register', AuthController.store);
routes.post('/auth/login', AuthController.login);
routes.get('/auth/me', VerifyToken, AuthController.show);
routes.get('/auth/logout', AuthController.delete);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

routes.post('/posts', VerifyToken, PostController.store);
routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.delete('/posts/:id', VerifyToken, PostController.delete);
routes.put('/posts/:id', PostController.update);


module.exports = routes;