// Get all of our friend data
var data = require('../data.json');


/*
 * GET home page.
 */

exports.view = function(req, res){
	var DateToShow = req.params.thedate;
	if (DateToShow === undefined) {
		DateToShow = 'Please choose a date';
	}

  res.render('date', {
  	'date': DateToShow,
  });
};
