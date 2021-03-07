var data = require("../data.json");

exports.restoreTask = function(request, response) {    
  // restore the note by adding it back


	var notename = request.params.notename;

var task = getByValue(data.trash,notename)
	data.trash = data.trash.filter(function(el) { return el.name != notename; }); 

	if(!isEmpty(task)){

  data.otherdatenotes.push(task);
  data.notes.push(task);
}
  response.render('trash',data);

 };

function getByValue(arr, value) {

  for (var i=0, iLen=arr.length; i<iLen; i++) {

    if (arr[i].name == value) return arr[i];
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