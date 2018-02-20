var assert = require('assert');
var engine = require('../engine.js')

describe('get all moves', function() {
  describe('#indexOf()', function() {
    it('all move for 2', function() {
      var change = '1,9,10';
      var total = 2;

      var command1 = 'position '+ change + ' '+total;
      console.log('command 1 is: ', command1)
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [1,1]);
    });


    it('all move for 9', function() {
      var change = '1,9,10';
      var total = 9;

      var command1 = 'position '+ change + ' '+total;
      console.log('command 1 is: ', command1)
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [9]);
    });


    it('all move for 10', function() {
      var change = '1,9,10';
      var total = 10;

      var command1 = 'position '+ change + ' '+total;
      console.log('command 1 is: ', command1)
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [10]);
    });

    it('all move for 18', function() {
      var change = '1,9,10';
      var total = 18;

      var command1 = 'position '+ change + ' '+total;
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        console.log('command 1 is: ', command1)

        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [9,9]);
    });

    it('all move for 7', function() {
      var change = '1,9,10';
      var total = 7;

      var command1 = 'position '+ change + ' '+total;
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        console.log('command 1 is: ', command1)

        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [1,1,1,1,1,1,1]);
    });


    it('all move for 19', function() {
      var change = '1,9,10';
      var total = 19;

      var command1 = 'position '+ change + ' '+total;
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        console.log('command 1 is: ', command1)

        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [10,9]);
    });


    it('all move for 27', function() {
      var change = '1,9,10';
      var total = 27;

      var command1 = 'position '+ change + ' '+total;
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        console.log('command 1 is: ', command1)

        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [9,9,9]);
    });

    it('all move for 29', function() {
      var change = '1,9,10';
      var total = 29;

      var command1 = 'position '+ change + ' '+total;
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        console.log('command 1 is: ', command1)

        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [9,10,10]);
    });


    it('all move for 8', function() {
      var change = '1,9,10';
      var total = 8;

      var command1 = 'position '+ change + ' '+total;
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        console.log('command 1 is: ', command1)

        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [1,1,1,1,1,1,1,1]);
    });


    it.only('all move for 12', function() {
      var change = '1,9,10';
      var total = 12;

      var command1 = 'position '+ change + ' '+total;
      var response = engine.handleCommand(command1);

      var moves = [];
      while(response.bestmove != -1){
        moves.push(response.bestmove);
        total = total - response.bestmove;
        command1 = 'position '+ change + ' '+total;
        console.log('command 1 is: ', command1)

        response = engine.handleCommand(command1);
      }
      console.log('moves: ', moves)

      assert.deepEqual(moves, [10,1,1]);
    });

  });
});
