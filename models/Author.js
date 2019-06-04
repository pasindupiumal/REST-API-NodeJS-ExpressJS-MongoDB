const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

    FirstName: {
        type: String
    },

    LastName: {
        type: String
    },

    Nationality: {
        type: String
    },
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;