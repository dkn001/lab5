var data = require("../data.json");

exports.addNote = function(request, response) {    
	// add the note to specific date or to today


	//get the date from URL parameter
	var DateToShow = request.params.thedate;

//create the new note
var newNote = {
	'name': request.query.name,
	'description' : request.query.description,
	'imageURL' : 'https://placeimg.com/400/400/people',
	'notedate' : DateToShow
}

//add to a specific date
if (DateToShow) {
	data.datelist.pop();
	data.datelist.push({'date':DateToShow});
	data.otherdatenotes.push(newNote);
	data[DateToShow] = newNote;

	response.render('date',data);

//or add to today
} else {

	data.notes.push(newNote);

	response.render('index',data);
}
 };