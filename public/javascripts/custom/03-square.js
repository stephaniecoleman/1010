function Square(x, y, type, color) {
	this.x = x;
	this.y = y;
	this.color = color || "grey";
	this.type = type
}

Square.prototype.html = function() {
	return '<div class="square ' + this.type + '" data-color="' + this.color + '" data-x=' + this.x + ' data-y=' + this.y + '></div>'
};
