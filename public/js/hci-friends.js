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


	//from lab6
	$('.project a').click(addProjectDetails);

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