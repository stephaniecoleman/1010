function Game() {}

Game.prototype.init = function(board) {
	this.turn = 0;
	this.board = board;
	this.startingCoords = null;
	this.endingCoords = null;
	this.delta = null;
	this.createState();
	this.generateShape();
	this.doTurn();
}

Game.prototype.doTurn = function() {
	this.getStartingCoords();
	this.addDroppableListener();
};

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
	this.colorShapeBoxes(coords, color);
};

// this needs a start coordinate, but I took it out for now.
Game.prototype.colorShapeBoxes = function(coords, color) {
	for(var x = 0; x < coords.length; x++) {
		var xCell = coords[x][0];
		var yCell = coords[x][1];
		$('.shape[data-x=' + xCell + '][data-y=' + yCell + ']').attr("data-color", color)	;	
	}
};

Game.prototype.getStartingCoords = function() {
	var self = this;
	$('.square.shape').mousedown(function() {
		var x = $(this).data("x");
		var y = $(this).data("y");
		self.startingCoords = [x, y];
	});
};

Game.prototype.addDroppableListener = function() {
	var self = this;
	$(".droppable").droppable({
		tolerance: "pointer",	
		hoverClass: "bleh",
    drop: function(e, ui) {
			var droppedOn = $(this);
    	self.addSelectedClass(ui);
    	self.getEndingCoords(droppedOn);
    	debugger;
    	self.getDelta();
		}
	});

};

Game.prototype.addSelectedClass = function(ui) {
  ui.helper.children().children().each(function() {
		if ($(this).data("color") !== "clear") {
			$(this).addClass("selected");
		}
	});
	var dropped = $('.selected');
};

Game.prototype.getEndingCoords = function(obj) {
	var x = obj.data("x");
	var y = obj.data("y");
	this.endingCoords = [x, y];
};

Game.prototype.getDelta = function() {
	debugger;
	var deltaX = this.endingCoords[0] - this.startingCoords[1];
	var deltaY = this.endingCoords[1] - this.startingCoords[1];
	this.delta = [deltaX, deltaY];
};


