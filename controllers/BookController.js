const express = require('express');
const router = express.Router();
const BookService = require('../services/BookService');

//Get Controller To Get All Books
router.get('/', (req, res) => {

    BookService.getAllBooks().then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


//Get Method To Get A Book By ID
router.get('/:id', (req, res) => {
    BookService.findBookById(req.params.id).then(data => {
        res.status(data.status).send({message: data.message, data:data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

//Post Controller To Add A New Book
router.post('/', (req, res) => {

    BookService.addBook(req.body).then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
})

//Put Method To Update The Book Details
router.put('/:id', (req, res) => {

    BookService.updateBook(req.params.id, req.body).then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
})

//Delete Method To Delete A Book
router.delete('/:id', (req, res) => {
    
    BookService.deleteBook(req.params.id).then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
})

module.exports = router;
