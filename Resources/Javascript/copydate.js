window.onload = function addCopyright() {
	document.getElementById("footer").innerHTML = 
		"<p align='center'>&copy; Copyright " + 
		new Date().getFullYear() + 
		" Propane Power Kits. All rights reserved.</p>";
};