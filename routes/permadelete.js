var data = require("../data.json");

exports.permaDelete = function(request, response) {    
  // permanently delete the note

	var notename = request.params.notename;

	data.trash = data.trash.filter(function(el) { return el.name != notename; }); 

  response.render('trash',data);

 };