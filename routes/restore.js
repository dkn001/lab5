var data = require("../data.json");

exports.restoreTask = function(request, response) {    
  // restore the note by adding it back


	var notename = request.params.notename;
//console.log(notename)

	var task = data.trash.find(o => o.name === notename);
//console.log(task)

	data.trash = data.trash.filter(function(el) { return el.name != notename; }); 


  data.otherdatenotes.push(task);
  data.notes.push(task);

  response.render('trash',data);

 };