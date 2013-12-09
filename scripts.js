$(document).ready(function() {
	var open = true;
	$("#menu-button").click(toggle);
})

function toggle() {
	if (open) {
		$("nav").css({
			display: "none"
		});
		$("#wrapper").stop().animate({
			width: "94%"
		}, 500);
		open = false;
	}
	else {
		$("#wrapper").stop().animate({
			width: "74%"
		}, 500, function() {
			$("nav").css({
				display: "block"
			});
		});
		open = true;
	}
}