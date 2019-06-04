const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    Name:{
        type:String
    },

    ISBN: {
        type: String
    },

    Author:{
        type: String
    },

    Price: {
        type: Number
    },

    YearOfPublication: {
        type: Number
    },

    Publisher: {
        type: String
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;