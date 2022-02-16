function copiar(event){
	event.preventDefault();
	limpiarDivs("mensajeVacio")
	let contenido = document.getElementById("mensaje-encriptado");
	if(!contenido.value){
		document.querySelector("#mensajeVacio").classList.remove("invisible");
		mensajeVacio = true;
		return;
	}
	contenido.select();
	document.execCommand("copy");
	document.querySelector("#mensajeCopiado").classList.remove("invisible");
	mensajeCopiado = true;
	document.getElementById("mensaje-encriptado").value = "";
}

let botonCopiar = document.getElementById("copiar");
botonCopiar.onclick = copiar;