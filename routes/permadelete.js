var data = require("../data.json");

exports.permaDelete = function(request, response) {    
  // Your code goes here


  data.trash.pop();

  response.render('trash',data);

 };