var data = require("../data.json");

exports.addNote = function(request, response) {    
	// Your code goes here
		var DateToShow = request.params.thedate;
console.log(DateToShow);
			var newNote = {
		'name': request.query.name,
		'description' : request.query.description,
		'imageURL' : 'https://placeimg.com/400/400/people',
		'notedate' : DateToShow
		}


	if (DateToShow) {
			data.datelist.pop();
data.datelist.push({'date':DateToShow});
	data.otherdatenotes.push(newNote);

data[DateToShow] = newNote;

	response.render('date',data);
	} else {
	data.notes.push(newNote);
	response.render('index',data);
}
 };