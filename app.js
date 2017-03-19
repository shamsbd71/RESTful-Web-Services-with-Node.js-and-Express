var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

// connect to mongodb
var db = mongoose.connect('mongodb://localhost/bookAPI');

// data structure
var Book = require('./models/BookModel'); 

// initialize express
var app = express();

// set port
var port = process.env.PORT || 3000;

// assign body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var bookRouter = require('./Routes/bookRoutes')(Book);
	
// assign router
app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

// default utput
app.get('/', function(req, res){
	res.send('Welcome to my API');
});

// start listen to porn/live
app.listen(port, function(){
	console.log('Gulp is running on PORT: ' + port);
});
