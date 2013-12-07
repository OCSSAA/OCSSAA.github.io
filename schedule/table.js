var tds = document.getElementsByTagName('td'),
	selected = "";

for (i in tds) {
	tds[i].onclick = function() {
		selected = this.innerHTML;
		for (n in tds) {
			// Find all cells with the ID in them
			if (tds[n].innerHTML.indexOf(selected) != -1) {
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
}