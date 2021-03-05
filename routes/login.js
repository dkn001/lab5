var data = require("../data.json");

exports.addLogin = function(request, response) {    
	// check if the user is login or not
	var login = {
		'login': 'true'
	}

	data.login.push(login);
	response.render('index',data);

 };