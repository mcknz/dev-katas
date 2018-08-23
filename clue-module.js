
Clue = function() {
	this.who = 'Green';
	this.what = 'Candlestick';
	this.where = 'Hall'
	this.sentence = '20 years';
	
	this.solve = function() {
		return this.who + ', ' +
			this.where + ', ' +
			this.what;
	}
}