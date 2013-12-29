$(document).ready(function() {
	
	var open = true;
	
	$("#menu-button").click(toggle);
	
	if (window.innerWidth <= 1080) {
		toggle();
	}

	setInterval(checkSmaller, 3000);

})

function checkSmaller() {
	if (window.innerWidth <= 1080 && open) {
		toggle();
	}
}

function toggle() {
	if (open) {
		$("nav").css({
			display: "none"
		});
		$("#wrapper").css({
			width: "94%"
		});
		open = false;
	}
	else {
		$("#wrapper").css({
			width: "74%"
		});
		setTimeout( function() {
			$("nav").css({
				display: "block"
			})}, 200);
		open = true;
	}
}