var bookController = function(Book){
	var post = function(req, res){
		var book = new Book(req.body);
		book.save();
		// console.log(book);

		res.status(201).send(book);
	}

}

module.export = bookController;