var rows = document.getElementsByTagName('tr');

// function getSize(str) {
// 	if (str.length == 6 && str[1] == " ") {
// 		return [1, 4];
// 	}
// 	else if (str.length == 6 && str[5] == " ") {
// 		return [2, 5];
// 	}
// 	else {
// 		return 0;
// 	}
// }

for (var i = 0; i < rows.length; i++) {
	if (rows[i].firstElementChild.innerHTML != "") {
		var points_for = 0;
		var points_against = 0;
		var c = rows[i].children;
		var points = c[11];
		var school = c[0].innerHTML;

		for (var n = 1; n <= 6; n++) {
			if (c[n].children[0] !== undefined) {
				console.log(school);
				var w = parseInt(c[n].children[0].innerHTML.substr(0,2)),
					x = parseInt(c[n].children[1].innerHTML.substr(0,2)),
					y = parseInt(c[n].children[0].innerHTML.substr(4)),
					z = parseInt(c[n].children[1].innerHTML.substr(4));

				console.log(w);
				console.log(x);
				console.log(y);
				console.log(z);

				if (!isNaN(w)) {
					points_for += w;
				}
				if (!isNaN(x)) {
					points_for += x;
				}
				if (!isNaN(y)) {
					points_against += y;
				}
				if (!isNaN(z)) {
					points_against += z;
				}
			}
		}

		points.innerHTML = (points_for - points_against).toString();
	}
}