var open_by_user = false;

$(document).ready(function() {
	
	$("#menu-button").click(toggle);
	
	// To be compatible with the media queries in the css
	if (window.innerWidth <= 1080) {
		open = false;
	}
	else {
		open = true;
	}

	// Do this on load because it causes problems if defined in the css
	$("#wrapper").css({transition: "all 0.2s ease 0s"});

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
			$(".navItem").css({
				fontSize: "300%"
			})
		}
		else {
			$("#wrapper").css({
				width: "74%"
			});
			$("nav").css({
				width: "20%"
			})
			$(".navItem").css({
				fontSize: "100%"
			})
		}
		setTimeout( function() {
			
			$("nav").css({
				display: "block"
			});

		}, 200);
		
		open = true;
		open_by_user = true;
	}
}