const express = require('express');
const router = express.Router();
const BookRouter = require('./controllers/BookController');
const AuthorRouter = require('./controllers/AuthorController');

router.use('/Books/', BookRouter);
router.use('/Authors/', AuthorRouter);

module.exports = router;
