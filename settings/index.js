function launch() {
	let url = "../?"
	if (PNAME.value && APORT.value) {
		url = url + "&name=" + PNAME.value;
		url = url + "&port=" + APORT.value;
	}
	url = url + "&sb=" + SB.value;
	url = url + "&hb=" + HB.value;
	url = url + "&rc=" + RC.value;
	url = url.replace("?&", "?");
	window.open(url, "_self");
}