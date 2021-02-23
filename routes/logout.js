var data = require("../data.json");

exports.removeLogin = function(request, response) {    
	// Your code goes here

while(!(isEmpty(data.login))) {
	data.login.pop();
}
	response.render('index',data);

 };


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}