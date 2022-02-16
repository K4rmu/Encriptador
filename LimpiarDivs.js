function limpiarDivs(error){
	if(error){
		document.getElementById(error).classList.add("invisible");
		error = false;
	}
}