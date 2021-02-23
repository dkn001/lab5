var data = require("../data.json");

exports.addLogin = function(request, response) {    
	// Your code goes here
			var login = {
		'login': 'true'
		}

	data.login.push(login);
	response.render('index',data);

 };