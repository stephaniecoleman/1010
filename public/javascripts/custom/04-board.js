function Board() {}

Board.prototype.init = function() {
  this.gameWidth = 10;
  this.gameHeight = 10;
  this.shapeBoxHeight = 5;
  this.shapeBoxWidth = 17;
  this.renderHTML();
}

Board.prototype.renderHTML = function() {
  var boardHTML = this.createBoardColumns();
  var shapesHTML = this.createShapesColumns();
  var backgroundHTML = this.createBackgroundShapes();
  $('#board').append(boardHTML);
  $('#shapes').append(shapesHTML);
  $('#shapes').append(backgroundHTML);
}

Board.prototype.createBackgroundShapes = function() {
  var startHTML = '<div class="row row-centered back">';
  var middleHTML = '';
  for (var col = 0; col < 5; col++) {
    middleHTML += '<div class="column col-md-1 col-sm-1 col-xs-1 col-centered">'+ this.createBackgroundSquares(col, this.shapeBoxHeight) + '</div>';
  }
  var endHTML = '</div>';
  return startHTML + middleHTML + endHTML;
};

Board.prototype.createBackgroundSquares = function(column, height) {
  var html = ""
  for (var row = 0; row < height; row++) {
    html += '<div class="square background"></div>';
  }
  return html;
};

Board.prototype.createBoardColumns = function() {
  var startHTML = '<div class="row row-centered">';
  var middleHTML = '';
  for (var col = 0; col < this.gameWidth; col++) {
    middleHTML += '<div class="column col-md-1 col-sm-1 col-xs-1 col-centered">'+ this.createSquares(col, this.gameHeight, "game") + '</div>';
  }
  var endHTML = '</div>';
  return startHTML + middleHTML + endHTML;
};

// This is the same as createBoardColumns, essentially. Need to refactor with parameters to make more DRY.
Board.prototype.createShapesColumns = function() {
  var startHTML = '<div class="row row-centered front draggable">';
  var middleHTML = '';
  for (var col = 0; col < 5; col++) {
    middleHTML += '<div class="column col-md-1 col-sm-1 col-xs-1 col-centered">'+ this.createSquares(col, this.shapeBoxHeight, "shape", "clear") + '</div>';
  }
  var endHTML = '</div>';
  return startHTML + middleHTML + endHTML;
};

Board.prototype.createSquares = function(column, height, type, color) {
  var html = ""
  for (var row = 0; row < height; row++) {
    var square = new Square(column, row, type, color);
    html += square.html();
  }
  return html;
}

Board.prototype.addListeners = function() {
}

Board.prototype.removeAllListeners = function() {
  $('.square').unbind();
}
