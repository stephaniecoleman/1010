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
  $('#board').append(boardHTML);
  $('#shapes').append(shapesHTML);
}

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
  var startHTML = '<div class="row row-centered">';
  var middleHTML = '';
  for (var col = 0; col < this.shapeBoxWidth; col++) {
    middleHTML += '<div class="column col-md-1 col-sm-1 col-xs-1 col-centered">'+ this.createSquares(col, this.shapeBoxHeight, "shape") + '</div>';
  }
  var endHTML = '</div>';
  return startHTML + middleHTML + endHTML;
};

Board.prototype.createSquares = function(column, height, type) {
  var html = ""
  for (var row = 0; row < height; row++) {
    var square = new Square(column, row, type);
    html += square.html();
  }
  return html;
}

Board.prototype.addListeners = function() {
}

Board.prototype.removeAllListeners = function() {
  $('.square').unbind();
}
