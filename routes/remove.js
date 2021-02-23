var data = require("../data.json");

exports.removeTask = function(request, response) {    
	// Your code goes here
	data.notes.pop();
	response.render('index',data);
 };