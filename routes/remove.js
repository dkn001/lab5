var data = require("../data.json");

exports.removeTask = function(request, response) {


		// remove the note and put it to trash
	var DateToShow = request.params.thedate;
	var notename = request.params.notename;

	//remove note from a specific date
if (DateToShow) {
	//var deletedTask = data.otherdatenotes.find(function(o){ if(o.name === notename){return o;}});

var deletedTask = getByValue(data.otherdatenotes,notename);

	data.otherdatenotes = data.otherdatenotes.filter(function(el) { return el.name != notename; }); 

	if('name' in deletedTask){
		data.trash.push(deletedTask);
	}
	//remove note from today
		response.render('date',data);

} else{
	//var deletedTask = data.notes.find(function(o){ if(o.name === notename){return o;}});
var deletedTask = getByValue(data.notes,notename);

	data.notes = data.notes.filter(function(el) { return el.name != notename; }); 

	if('name' in deletedTask){
		data.trash.push(deletedTask);
	}

	response.render('index',data);
}
}


function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

function getByValue(arr, value) {

  for (var i=0, iLen=arr.length; i<iLen; i++) {

    if (arr[i].name == value) return arr[i];
  }
}