const Author = require('../models/Author');

const AuthorService = function(){

    this.addAuthor = (data) => {

        return new Promise((resolve, reject) => {

            const newAuthor = new Author({
                FirstName: data.FirstName,
                LastName: data.LastName, 
                Nationality: data.Nationality
            })

            newAuthor.save().then(data => {
                resolve({status: 200, message: 'New Author Added Successfully', data: data});
            }).catch(err => {
                reject({status: 500, message: 'Error - ' + err});
            })
        })
    }

    this.getAllAuthors = () => {

        return new Promise((resolve, reject) => {

            Author.find().sort('FirstName').then(data => {
                resolve({status: 200, message: 'All Authors', data: data});
            }).catch(err => {
                reject({status: 500, message: 'Error - ' + err});
            })
        })
    }
}

module.exports = new AuthorService();