var friday = document.querySelector("#friday"),
	tds = friday.querySelectorAll("td"),
	pools = document.querySelector("#pools"),
	pool_tds = pools.querySelectorAll("td"),
	selected = "";

function check(str) {

	var id = /^[A-R]$/;
	var school = /^((?!Pool).)*$/;
	var cell = new RegExp("^[A-R] vs " + str[0] + "$|^" + str[0] + " vs [A-R]$|" + "^[A-R] vs " + str[str.length - 1] + "$|^" + str[str.length - 1] + " vs [A-R]$");

	if (id.test(str)) {
		return "ID";
	}
	else if (cell.test(str)) {
		return "Cell";
	}
	else if (school.test(str)) {
		return "School Name";
	}
	else {
		return false;
	}

}

function tdsLoop(what) {
	for (n in tds) {
		if (check(tds[n].innerHTML) == "Cell" && tds[n].innerHTML.indexOf(what) != -1) {
			tds[n].style.background = "rgb(54, 117, 174)";
			tds[n].style.color = "white";

			tds[n].parentElement.children[0].style.background = "rgb(229, 129, 62)";
			tds[n].parentElement.children[0].style.color = "white";
		}
		// Reset the colors each click
		else {
			tds[n].style.background = "white";
			tds[n].style.color = "#333";
		}
	}
}

for (i in pool_tds) {
	pool_tds[i].onclick = function() {
		var selected = this.innerHTML;
		if (this.previousElementSibling !== null) {
			var	left = this.previousElementSibling.innerHTML;
		}

		// alert(check(selected));

		check(selected) == "School Name" && tdsLoop(left);
		check(selected) == "ID" && tdsLoop(selected);
	}
}