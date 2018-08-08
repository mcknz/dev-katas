
Clue = function() {
	this.who = 'Green';
	this.what = 'Candlestick';
	this.where = 'Hall'
	
	this.solve = function() {
		return this.who + ', ' +
			this.where + ', ' +
			this.what;
	}
}