function Game() {}

Game.prototype.init = function(board) {
	this.turn = 0;
	this.currentColor = null;
	this.legitMove = true;
	this.board = board;
	this.startingCoords = null;
	this.endingCoords = null;
	this.delta = null;
	this.score = 0;
	this.addDroppableListener();
	this.addDraggableListener();
	this.doTurn();
}

Game.prototype.doTurn = function() {
	this.legitMove = false;
	this.checkForHorLine();
	this.checkForVertLine();
	this.board.updateScore(this.score);
	this.generateShape();
	this.getStartingCoords();
};

Game.prototype.checkForHorLine = function() {
	var self = this;
	for (var i = 0; i < this.board.gameHeight; i++) {
		var row = $('.square.game[data-y=' + i + ']');
		if (self.checkCells(row)) {
			self.clearCells(row);
		}
	}
};

Game.prototype.checkForVertLine = function() {
	var self = this;
	$('.the-game .column').each(function() {
		if (self.checkCells(this.children)) {
			self.clearCells(this.children);
		}
	})
};

Game.prototype.checkCells = function(line) {
	var clearMe = true;
	$(line).each(function() {
		if ($(this).attr("data-color") === "grey") {
			clearMe = false;
			return false;
		}
	})
	return clearMe;	
};


Game.prototype.clearCells = function(line) {
	$(line).each(function() {
		$(this).animate({
			backgroundColor: '#eee'
		}, 500, function(){
			$(this).css('background-color', '');
			$(this).attr("data-color", "grey");
		});
	})
	this.score += 1;
};

Game.prototype.generateShape = function() {
	var shape = new Shape;
	this.currentColor = shape.color;
	var coords = shape.coordinates;
	this.colorShapeBoxes(coords);
};

// this needs a start coordinate, but I took it out for now.
Game.prototype.colorShapeBoxes = function(coords) {
	for(var x = 0; x < coords.length; x++) {
		var xCell = coords[x][0];
		var yCell = coords[x][1];
		$('.shape[data-x=' + xCell + '][data-y=' + yCell + ']').attr("data-color", this.currentColor)	;	
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

Game.prototype.addDraggableListener = function() {
	var self = this;
	$('.draggable').draggable({
		cursor: "move",
		helper: "clone",
		// appendTo: ".the-game",
		revert: false,
		drag: function(e, ui) {
			// drag - make original invisible 
			$('.front:not(".ui-draggable-dragging") .shape').css('visibility', 'hidden');
		},
		stop: function(e, ui) {
			// make original visible if invalid move
			if (self.legitMove == false) {
				$('.front:not(".ui-draggable-dragging") .shape').css('visibility', 'visible');
			}
		}
  });
};

Game.prototype.addDroppableListener = function() {
	$('.square.game').addClass("droppable");
	var self = this;
	$(".droppable").droppable({
		tolerance: "pointer",	
		hoverClass: "bleh",
    drop: function(e, ui) {
    	// this will first calculate whether there are open spots, then write legitMove to false or true 

    	// (this gives us ui.offset, which contains position relative to the document. could be useful! An object that contains the position of the dragged element or helper, relative to the document. As with position, the object has left and top properties.)

    	// reset revert to false and legitMove to true. 
			ui.draggable.draggable('option', 'revert', false);
			self.legitMove = true;

			// make original item invisible

			var droppedOn = $(this);
			self.getEndingCoords(droppedOn);
			self.getDelta();
    	var shapeSquares = self.addSelectedClass(ui.helper);
  		self.legitMove = true;
    	// add delta to each coord
    	shapeSquares.each(function(index) {
    		var correspondingX = $(this).data('x') + self.delta[0];
    		var correspondingY = $(this).data('y') + self.delta[1];
    		var correspondingSquare = self.getjQuerySquare(correspondingX, correspondingY);
    		if (correspondingSquare.attr("data-color") != "grey") {
    			return self.legitMove = false;
    		}
    	});

    	if (self.legitMove == true) {
    		// make original visible
    		$('.front:not(".ui-draggable-dragging") .square.shape').css('visibility', 'visible');

    		// change original to clear
				$('.front:not(".ui-draggable-dragging") .square.shape').attr('data-color', 'clear')

    		shapeSquares.each(function(){
    			var correspondingX = $(this).data('x') + self.delta[0];
    			var correspondingY = $(this).data('y') + self.delta[1];
    			// change new location to color of shape
    			$('.game[data-x="' + correspondingX + '"][data-y="' + correspondingY + '"]').attr("data-color", self.currentColor);
    		});
    		self.doTurn();
    	}
    }
	});
};

Game.prototype.getjQuerySquare = function(x, y) {
	return $('.game[data-x="' + x + '"][data-y="' + y + '"]');
};

Game.prototype.addSelectedClass = function(jQueryElement) {
  jQueryElement.children().children().each(function() {
		if ($(this).data("color") !== "clear") {
			$(this).addClass("selected");
		}
	});
	return $('.selected');
};

Game.prototype.getEndingCoords = function(obj) {
	var x = obj.data("x");
	var y = obj.data("y");
	this.endingCoords = [x, y];
};

Game.prototype.getDelta = function() {
	var deltaX = this.endingCoords[0] - this.startingCoords[0];
	var deltaY = this.endingCoords[1] - this.startingCoords[1];
	this.delta = [deltaX, deltaY];
};