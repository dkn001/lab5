var data = require("../data.json");

exports.permaDelete = function(request, response) {    
  // permanently delete the note

  data.trash.pop();

  response.render('trash',data);

 };