var should = require('should'),
	sinon  = require('sinon');

describe('Book Controller Tests:', function(){
	describe('Post:', function(){
		it('should not allow an empty title', function(){
			var Book = function(){
				this.save = function(){};
			};

			var req = {
				body: {
					author: 'Maruf'
				}
			};
		});
	})
});