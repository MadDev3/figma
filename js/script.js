
var bl = "none";

function Show() {
	var block = document.getElementById('downMenu');
	if (bl=="none") {
		block.style.display = "block";
		document.getElementById('burger').innerHTML = "&times;";
		bl = "block"
	}
	else if(bl=="block"){
		block.style.display = "none";
		document.getElementById('burger').innerHTML = "&#9776;";
		bl = "none";
	}
	
}