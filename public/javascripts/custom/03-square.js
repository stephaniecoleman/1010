function Square(x, y) {
	this.x = x;
	this.y = y;
}

Square.prototype.html = function() {
	return '<div class="square" data-x=' + this.x + ' data-y=' + this.y + '></div>'
	// return '<div class="square" data-x=' + this.x + ' data-y=' + this.y + '>' + this.x + "," + this.y + '</div>'
};
