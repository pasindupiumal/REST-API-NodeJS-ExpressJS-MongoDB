const express = require('express');
const router = express.Router();
const AuthorService = require('../services/AuthorService');
const BookService = require('../services/BookService');


//Post Method To Add A New Author
router.post('/', (req, res) => {

    AuthorService.addAuthor(req.body).then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
})

//Get Method To Get Books By The Author
router.get('/:AuthorName/Books', (req, res) => {

    BookService.findBooksByAuthor(req.params.AuthorName).then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
})

//Get Method To Get All Authors
router.get('/', (req, res) => {

    AuthorService.getAllAuthors().then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
})

module.exports = router;