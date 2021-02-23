var data = require("../data.json");

exports.removeTask = function(request, response) {    
	// Your code goes here
		var DateToShow = request.params.thedate;


		if (DateToShow) {
	data.otherdatenotes.pop();

	response.render('date',data);
	} else{

	data.notes.pop();
	response.render('index',data);
}
 };