function Board() {
  this.state = 0; // 这是个两维数组，参见performance/substring/v2.js
  this.change = []; // one dimention array
}

Board.prototype.setup = function(change, total) {
  console.log('change, total: ', change, total)
  this.state = total;
  this.ply = 1;
  this.change = JSON.parse(JSON.stringify(change)); // Deep copy;
  this.limit = total * 100;
};


Board.prototype.copy = function() {
  var newBoard = new Board();
  newBoard.state = this.state;
  newBoard.change = JSON.parse(JSON.stringify(this.change)); // Deep copy;
  newBoard.ply = this.ply;
  newBoard.limit = this.limit;
  return newBoard;
};

Board.prototype.getActions = function() {
  if (this.state > 0) {
    return JSON.parse(JSON.stringify(this.change));
  } else {
    return [];
  }
};

Board.prototype.doAction = function(action) {
  // action is a change number, such as: 2

  this.state = this.state - action;
  ++this.ply;
};

Board.prototype.getResult = function() {

  if (this.state == 0) {
    return -this.ply;
  }

  if (this.state < 0) {
    return  -this.limit;
  }
  console.log("ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
};

module.exports = Board;
