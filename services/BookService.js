const Book = require('../models/Book');

const BookService = function(){

    this.addBook = (data) => {

        return new Promise((resolve, reject) => {

            const newBook = new Book({
                Name: data.Name,
                ISBN: data.ISBN,
                Author: data.Author,
                Price: data.Price,
                YearOfPublication: data.YearOfPublication,
                Publisher: data.Publisher

            });

            newBook.save().then(() => {
                resolve({status: 200, message: 'Book Added Successfully', data: newBook});
            }).catch(err => {
                reject({status: 500, message: 'Error - ' + err});
            })
        })
    }

    this.getAllBooks = () => {

        return new Promise((resolve, reject) => {

            Book.find().sort('Name').then((books) => {
                resolve({status: 200, message: 'All Books', data: books});
            }).catch(err => {
                reject({status: 500, message: 'Error - ' + err});
            })
        })
    }

    this.findBookById = (bookID) => {

        return new Promise((resolve, reject) => {

            Book.findById(bookID).then(book => {

                if(book){
                    resolve({status: 200, message: 'Book Found', data: book});     
                }
                else{
                    reject({status: 500, message: 'Error.Invalid ID - ' + err});
                }
                
            }).catch(err => {
                reject({status: 500, message: 'Error - ' + err});
            })
        })
    };

    this.findBooksByAuthor = (AuthorName) => {

        return new Promise((resolve, reject) => {

            Book.find({Author:AuthorName}).sort('Author').then(data => {
                resolve({status: 200, message: 'Books Wrote By ' + data.Author, data: data});
            }).catch(err => {
                reject({status: 500, message:'Error - ' + err});
            })
        })
    }

    this.updateBook = (bookID, data) => {

        return new Promise((resolve, reject) => {

            const updateBook = {
                Name: data.Name,
                ISBN: data.ISBN,
                Author: data.Author,
                Price: data.Price,
                YearOfPublication: data.YearOfPublication,
                Publisher: data.Publisher
            };

            Book.findByIdAndUpdate(bookID, updateBook).then(() => {
                Book.findById(bookID).then(data => {
                    resolve({status: 200, message: 'Book Details Updated', data: data});
                }).catch(err => {
                    reject({status: 500, message: 'Error - ' + err});
                })
            }).catch(err => {
                reject({status: 500, message: 'Error - ' + err});
            })
        })
    }

    this.deleteBook = (bookID) => {

        return new Promise((resolve, reject) => {

            Book.findByIdAndDelete(bookID).then(data => {
                resolve({status: 200, message:'Book Deleted', data: data});
            }).catch(err => {
                reject({status: 500, message: 'Error - ' + err});
            })
        })
    }
}

module.exports = new BookService();