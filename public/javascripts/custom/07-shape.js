function Shape() {
	this.shapeOptions = ['horLine2', 'horLine3', 'horLine4', 'horLine5','smSquare', 'lgSquare', 'dot', 'vertLine2', 'vertLine3', 'vertLine4', 'vertLine5'];
	this.colorOptions = ['green', 'blue', 'purple', 'red', 'yellow']
	this.type = this.shapeOptions.random();
	this.color = this.colorOptions.random();
	this.render();
};


Shape.prototype.render = function() {
	if (this.type == 'horLine2') {
		this.coordinates = [[0,0], [1,0]];
	} else if (this.type == 'horLine3') {
		this.coordinates = [[0,0], [1,0], [2,0]];
	} else if (this.type == 'horLine4') {
		this.coordinates = [[0,0], [1,0], [2,0], [3,0]];
	} else if (this.type == 'horLine5') {
		this.coordinates = [[0,0], [1,0], [2,0], [3,0], [4,0]];
	}	else if (this.type == 'dot') {
		this.coordinates = [[0,0]];
	} else if (this.type == 'vertLine2') {
		this.coordinates = [[0,0], [0,1]];
	} else if (this.type == 'vertLine3') {
		this.coordinates = [[0,0], [0,1], [0,2]];
	} else if (this.type == 'vertLine4') {
		this.coordinates = [[0,0], [0,1], [0,2], [0,3]];
	} else if (this.type == 'vertLine5') {
		this.coordinates = [[0,0], [0,1], [0,2], [0,3], [0,4]];
	}	else if (this.type == 'smSquare') {
		this.coordinates = [[0,0], [0,1], [1,0], [1,1]];
	} else if (this.type == 'lgSquare') {
		this.coordinates = [[0,0], [1,0], [2,0], [0,1], [1,1], [2,1], [0,2], [1,2], [2,2]];
	}
};