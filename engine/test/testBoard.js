var assert = require('assert');
var Board = require('../board.js')

describe('test board', function() {
  describe('get score, etc', function() {



    it('Score for state > 0', function() {
      var board = new Board();
      board.setup([1,9,10], 9);
      board.state = 2;
      assert.equal(board.getResult(), "ERROR!");
    });

    it('Score for state = 0', function() {
      var board = new Board();
      board.setup([1,9,10], 9);
      board.state = 0;
      board.ply = 1
      assert.equal(board.getResult(),  -1);
    });

    it('Score for state < 0', function() {
      var board = new Board();
      board.setup([1,9,10], 9);
      board.state = -1;
      board.ply = 3
      assert.equal(board.getResult(), 900);
    });

    it('get actions: ', function() {
      var board = new Board();
      board.setup([1,9,10], 10);
      board.ply = 9;
      board.total = 9

      assert.deepEqual(board.getActions(), [1,9,10]);
    });

  });
});
