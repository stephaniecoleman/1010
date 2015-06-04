function Square(x, y) {
	this.x = x;
	this.y = y;
}

Square.prototype.html = function() {
	return this.x + "," + this.y;
};
