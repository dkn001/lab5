var data = require("../data.json");

exports.restoreTask = function(request, response) {    
  // restore the note by adding it back


  var task = data.trash[data.trash.length - 1];

  data.trash.pop();

  data.otherdatenotes.push(task);
  data.notes.push(task);

  response.render('trash',data);

 };