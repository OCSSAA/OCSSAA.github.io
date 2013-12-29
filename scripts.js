var open_by_user = false;

$(document).ready(function() {
	
	var open = true;
	
	$("#menu-button").click(toggle);
	
	if (window.innerWidth <= 1080) {
		toggle();
	}

	setInterval(checkSmaller, 3000);

})

function checkSmaller() {
	if (window.innerWidth <= 1080 && open && !open_by_user) {
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
		open_by_user = false;
	}
	
	else {
		if (window.innerWidth <= 1080) {
			$("#wrapper").css({
				width: "24%"
			})
			$("nav").css({
				width: "70%"
			})
		}
		else {
			$("#wrapper").css({
				width: "74%"
			});
			$("nav").css({
				width: "20%"
			})
		}
		setTimeout( function() {
			
			$("nav").css({
				display: "block"
			})

		}, 200);
		
		open = true;
		open_by_user = true;
	}
}