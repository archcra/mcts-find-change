var assert = require('assert');
var engine = require('../engine.js')

describe('get one move', function() {
  describe('#indexOf()', function() {
    it.only('first move', function() {
      var command1 = 'position 1,9,10 2';
      var response = engine.handleCommand(command1);

      assert.equal(response.bestmove, 1);
    });

    it('second  move', function() {
      var command1 = 'position 1,9,10 1';
      var response = engine.handleCommand(command1);

      assert.equal(response.bestmove, 1 );
    });

    it('No move', function() {
      var command1 = 'position 1,9,10 0';
      var response = engine.handleCommand(command1);

      assert.deepEqual(response.bestmove,  -1);
    });

    it.only('first move for 9', function() {
      var command1 = 'position 1,9,10 9';
      var response = engine.handleCommand(command1);

      assert.deepEqual(response.bestmove,  9);
    });





  });
});
