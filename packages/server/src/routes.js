const express = require('express');

const AuthController = require('./auth/AuthController');
const UserController = require('./user/UserController');
const PostController = require('./post/PostController');
const CommentController = require('./post/CommentController');

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
routes.get('/posts/:id', PostController.show);
routes.get('/posts', PostController.index);
routes.delete('/posts/:id', VerifyToken, PostController.delete);
routes.put('/posts/:id', PostController.update);

routes.post('/posts/:id/comment', VerifyToken, CommentController.store);
routes.get('/posts/:id/comment', CommentController.index);
routes.delete('/posts/:id/comment/:commentId', VerifyToken, CommentController.delete);
routes.put('/posts/:id/comment/:commentId', VerifyToken, CommentController.update);


module.exports = routes;