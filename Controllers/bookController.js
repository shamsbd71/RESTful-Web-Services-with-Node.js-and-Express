var bookController = function(Book){
	var post = function(req, res){
		var book = new Book(req.body);
		book.save();
		// console.log(book);

		res.status(201).send(book);
	}

	var get = function(req, res){
		// real output from mongodb
		var query = {};
		if(req.query.title){
			query.title = req.query.title;
		}
		if(req.query.genre){
			query.genre = req.query.genre;
		}
		if(req.query.author){
			query.author = req.query.author;
		}

	  	// real output from mongodb
	  	Book.find(query, function(err, books){
	  		if(err)
	  			res.status(500).send(err);
	  		else
	  			res.json(books);
	  	});
	}

	return {
		post: post,
		get: get
	}

}

module.exports = bookController;