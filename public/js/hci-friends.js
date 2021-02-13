/*'use strict';*/

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

/*
	$("a").click(function(e) {
		e.preventDefault();
		$(this).text(anagrammedName($(this).text()));
	});
*/

	//from lab6
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!

	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}





//from lab 6

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get("/project/"+idNumber, callBackFn);

}

function callBackFn(result) {
	console.log(result);

	$("#project"+result['id']+" .details").html("<p>"+result['title']+"</p>"  +   "<p>"+result['date']+"</p>"   +  "<img class='detailsImage' src='" + result['image'] + "' >"   +result['summary']);
}