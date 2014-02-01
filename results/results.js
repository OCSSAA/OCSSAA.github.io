var rows = document.getElementsByTagName('tr');

for (var i = 0; i < rows.length; i++) {
	if (rows[i].firstElementChild.innerHTML != "") {
		var points_for = 0;
		var points_against = 0;
		var c = rows[i].children;
		var points = c[11];

		for (var n = 1; n <= 6; n++) {
			if (c[n].children[0] !== undefined) {
				// console.log(parseInt(c[n].children[0].innerHTML.substr(0,2)));
				console.log(parseInt(c[n].children[0].innerHTML.substr(5,9)));
				console.log(parseInt(c[n].children[1].innerHTML.substr(5,9)));
				if (parseInt(c[n].children[0].innerHTML.substr(0,2)) !== NaN) {
					points_for += parseInt(c[n].children[0].innerHTML.substr(0,2));
				}
				if (parseInt(c[n].children[1].innerHTML.substr(0,2)) !== NaN) {
					points_for += parseInt(c[n].children[0].innerHTML.substr(0,2));
				}
				if (parseInt(c[n].children[0].innerHTML.substr(5,8)) !== NaN) {
					points_against += parseInt(c[n].children[0].innerHTML.substr(4,9));
				}
				if (parseInt(c[n].children[1].innerHTML.substr(5,8)) !== NaN) {
					points_against += parseInt(c[n].children[0].innerHTML.substr(4,9));
				}
			}
		}

		points.innerHTML = (points_for - points_against).toString();
	}
}