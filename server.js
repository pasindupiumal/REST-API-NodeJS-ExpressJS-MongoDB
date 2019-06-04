const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

//Use the body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Handle the routes
app.use('/', routes);

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/online1', {useNewUrlParser:true}).then(()=> {
    console.log('Connected To MongoDB');
}).catch(err => {
    console.log('Could Not Connect To MongoDB');
    console.log(err);
})

//Start the server
app.listen(port, (err) => {

    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log('Server Started.Listening On Port ' + port);
})