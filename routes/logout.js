var data = require("../data.json");

exports.removeLogin = function(request, response) {    
	// check if the user is logout or not

while(!(isEmpty(data.login))) {
	data.login.pop();
}
	response.render('index',data);

 };


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}