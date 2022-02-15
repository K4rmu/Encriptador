function encriptar(event){
	event.preventDefault();
	let mensaje = document.querySelector("#texto-ingesado").value;
	if(mensaje != mensaje.toLowerCase()){
		alert("Por favor, ingrese solo letras minúsculas, sin acentos.")
		document.querySelector("#texto-ingesado").value ="";
		return;
	}
	let msjEncriptado = "";
	for(let i= 0; i<mensaje.length; i++){
		if(mensaje[i] === "a") msjEncriptado = msjEncriptado + "ai";
		else if(mensaje[i] === "e") msjEncriptado = msjEncriptado +"enter";
		else if(mensaje[i] === "i") msjEncriptado = msjEncriptado +"imes";
		else if(mensaje[i] === "o") msjEncriptado = msjEncriptado +"ober";
		else if(mensaje[i] === "u") msjEncriptado = msjEncriptado +"ufat";
		else {msjEncriptado = msjEncriptado + mensaje[i];
		} 
	}
	
	let display = document.querySelector("#mensaje-encriptado");
	display.value = msjEncriptado;
	document.querySelector("#texto-ingesado").value = "";
}

let botonEncriptar = document.getElementById("encriptar");
botonEncriptar.onclick = encriptar;