function Game() {}

Game.prototype.init = function(board) {
	this.turn = 0;
	this.board = board;
	this.createState();
	this.generateShape();
}

Game.prototype.createState = function() {
	var arr = [];
	for(var i = 0; i < 100; i++) {
		arr.push({});
	}
	this.state = arr;
};

Game.prototype.generateShape = function() {
	var shape = new Shape;
	var color = shape.color;
	var coords = shape.coordinates;
	this.colorShapeBoxes(color, coords);
};

// this needs a start coordinate, but I took it out for now.
Game.prototype.colorShapeBoxes = function(color, coords) {
	for(var x = 0; x < coords.length; x++) {
		var xCell = coords[x][0];
		var yCell = coords[x][1];
		$('.shape[data-x=' + xCell + '][data-y=' + yCell + ']').attr("data-color", color)
	}
};