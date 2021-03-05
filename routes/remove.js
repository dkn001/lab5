var data = require("../data.json");

exports.removeTask = function(request, response) {    
	// remove the note and put it to trash
	var DateToShow = request.params.thedate;

//remove note from a specific date
if (DateToShow) {
	var deletedTask = data.otherdatenotes[data.otherdatenotes.length - 1];

	data.otherdatenotes.pop();
	data.trash.push(deletedTask);
	response.render('date',data);

	//remove note from today
} else{
	var deletedTask = data.notes[data.notes.length - 1];

	data.notes.pop();
	data.trash.push(deletedTask);

	response.render('index',data);
}
 };