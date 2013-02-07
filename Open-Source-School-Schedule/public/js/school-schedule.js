$(document).ready(function() {

	if (Modernizr.localstorage) {
		
		$("#message").html("Application loaded.");
		
	} else {
		alert("Missing local storage support");
	}

});