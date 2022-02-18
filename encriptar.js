var mensajeCopiado = false;
var inputVacio = false;
var caracteresIncorrectos = false;
var mensajeVacio = false;

function encriptar(event){
	event.preventDefault();
	
	let er = new RegExp("[A-Záéíóú]");

	limpiarDivs("mensajeCopiado");
	limpiarDivs("caracteresIncorrectos");
	limpiarDivs("inputVacio");
	limpiarDivs("mensajeVacio");
	

	var mensaje = document.querySelector("#texto-ingesado").value;
	
	if(!mensaje){
		document.querySelector("#inputVacio").classList.remove("invisible");
		inputVacio = true;
	}

	if(er.test(mensaje)){
		document.querySelector("#caracteresIncorrectos").classList.remove("invisible");
		caracteresIncorrectos = true;
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