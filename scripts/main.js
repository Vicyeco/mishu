// Cambia la imagen al hacer clic en ella
let miImage = document.querySelector("img");
miImage.onclick = function () {
	let miSrc = miImage.getAttribute("src");
	if (miSrc === "images/cat.jpg") {
		miImage.setAttribute("src", "images/flutty.png");
	} else {
		miImage.setAttribute("src", "images/cat.jpg");
	}
};


// Se selecciona los selectores que se usaran para colocar el nombre
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

// llama la funcion prompt que se encarga de pedir el nombre que se va a resgistrar en la pagina
function estableceNombreUsuario() {
	let miNombre = prompt("Por favor, ingresa tu nombre.");
	if (!miNombre) {
		estableceNombreUsuario();
	} else {
		localStorage.setItem("nombre", miNombre);
		miTitulo.textContent = "Mishu es genial, " + miNombre;
	}
}

// Esta desicion sirve para cambiar el nombre de sesion de la pagina
if (!localStorage.getItem("nombre")) {
	estableceNombreUsuario();
} else {
	let nombreAlmacenado = localStorage.getItem("nombre");
	miTitulo.textContent = "Mishu es genial, " + nombreAlmacenado;
}

// Se encarga de llamar a la etiqueta boton cambiar usuario
miBoton.onclick = function () {
	estableceNombreUsuario();
}