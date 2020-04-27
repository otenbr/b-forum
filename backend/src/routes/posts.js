const { Router } = require('express');

const PostController = require('../controllers/PostController');
const AnswerController = require('../controllers/AnswerController');

const routes = Router();

// Routes for posts
routes.get('/posts', PostController.showAll);

routes.get('/posts/:id', PostController.show);

routes.post('/posts', PostController.store);

routes.put('/posts/:id/like', PostController.like);

routes.put('/posts/:id/dislike', PostController.dislike);

// Routes for answers
routes.post('/posts/:id/answers', AnswerController.store);

routes.put('/posts/:id/answers/:answerId/like', AnswerController.like);

routes.put('/posts/:id/answers/:answerId/dislike', AnswerController.dislike);

module.exports = routes;
