function Board() {
  this.width = 10;
  this.height = 10;
  this.shapeBoxHeight = 5;
  this.shapeBoxWidth = 17;
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
  for (var col = 0; col < this.width; col++) {
    middleHTML += '<div class="column col-md-1 col-sm-1 col-xs-1 col-centered">'+ this.createSquares(col, this.height) + '</div>';
  }
  var endHTML = '</div>';
  return startHTML + middleHTML + endHTML;
};

// This is the same as createBoardColumns, essentially. Need to refactor with parameters to make more DRY.
Board.prototype.createShapesColumns = function() {
  var startHTML = '<div class="row row-centered">';
  var middleHTML = '';
  for (var col = 0; col < this.shapeBoxWidth; col++) {
    middleHTML += '<div class="column col-md-1 col-sm-1 col-xs-1 col-centered">'+ this.createSquares(col, this.shapeBoxHeight) + '</div>';
  }
  var endHTML = '</div>';
  return startHTML + middleHTML + endHTML;
};


Board.prototype.init = function() {
  this.renderHTML();
}

Board.prototype.createSquares = function(column, height) {
  var html = ""
  for (var row = 0; row < height; row++) {
    var square = new Square(column, row);
    html += '<div class="square" data-x=' + column + ' data-y=' + row + '>' + square.html() + '</div>';
  }
  return html;
}

Board.prototype.addListeners = function() {
}

Board.prototype.removeAllListeners = function() {
  $('.square').unbind();
}
