function desencriptar(event){
	event.preventDefault();
	
	limpiarDivs("mensajeCopiado");
	limpiarDivs("caracteresIncorrectos");
	limpiarDivs("inputVacio");
	limpiarDivs("mensajeVacio");


	let mensaje = document.getElementById("texto-ingesado").value;
	
	if(mensaje.search("ai") != -1){
		mensaje = mensaje.replaceAll("ai","a");	
	}
	if(mensaje.search("enter") != -1){
		mensaje = mensaje.replaceAll("enter","e");	
	}
	if(mensaje.search("imes") != -1){
		mensaje = mensaje.replaceAll("imes","i");	
	}
	if(mensaje.search("ober") != -1){
		mensaje = mensaje.replaceAll("ober","o");	
	}
	if(mensaje.search("ufat") != -1){
		mensaje = mensaje.replaceAll("ufat","u");	
	}
	
	let display = document.querySelector("#mensaje-encriptado");
	display.value = mensaje;
	document.querySelector("#texto-ingesado").value = "";
}

let botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.onclick = desencriptar;