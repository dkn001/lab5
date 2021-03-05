// Get all of our friend data
var data = require('../data.json');


/*
 * view specific date
 */

 exports.view = function(req, res){
 	var DateToShow = req.params.thedate;
 	if (DateToShow === undefined) {
 		DateToShow = 'Please choose a date';
 	}
 	data.datelist.pop();
 	data.datelist.push({'date':DateToShow});
 	res.render('date', data);
 };
