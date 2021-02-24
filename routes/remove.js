var data = require("../data.json");

exports.removeTask = function(request, response) {    
	// Your code goes here
		var DateToShow = request.params.thedate;


		if (DateToShow) {
	var deletedTask = data.otherdatenotes[data.otherdatenotes.length - 1];

	data.otherdatenotes.pop();
data.trash.push(deletedTask);
	response.render('date',data);
	} else{
	var deletedTask = data.notes[data.notes.length - 1];

	data.notes.pop();
	data.trash.push(deletedTask);

	response.render('index',data);
}
 };