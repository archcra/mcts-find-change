


$('#trials').val(1000);
$('#change').val('1,9,10');
$('#sum').val(18);


$('#play').click(function() {
  console.log('start to play ...');
  var command = '';
  var result = find_change_engine.handleCommand(command)


  var change = $('#change').val();
  var total = $('#sum').val();

  var command1 = 'position '+ change + ' '+total;
  console.log('command 1 is: ', command1)
  var response = find_change_engine.handleCommand(command1);

  var moves = [];
  while(response.bestmove != -1){
    moves.push(response.bestmove);
    total = total - response.bestmove;
    command1 = 'position '+ change + ' '+total;
    response = find_change_engine.handleCommand(command1);
  }
  console.log('moves: ', moves)
  $('#result').val(moves);


});
