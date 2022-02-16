function copiar(event){
	event.preventDefault();
	let contenido = document.getElementById("mensaje-encriptado");
	contenido.select();
	document.execCommand("copy");
	var alerta = document.querySelector("#mensaje-copiado");
	alerta.classList.remove("invisible");
	mostrando = true;
	document.getElementById("mensaje-encriptado").value = "";
}

let botonCopiar = document.getElementById("copiar");
botonCopiar.onclick = copiar;