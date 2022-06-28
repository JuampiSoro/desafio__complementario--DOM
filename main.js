class Persona {
    constructor(nombre, numeroFav) {
        this.nombre = nombre;
        this.numeroFav = numeroFav;
    }
}

const nombre = prompt("Ingresa tu nombre");

const ingresoNumero = parseInt(prompt("Ingresa su número favorito. PODES INGRESAR UN NÚMERO NEGATIVO"));

const container = document.querySelector("#container");

const texto = document.querySelector("#texto");






const personaje = new Persona(nombre, ingresoNumero);




if (ingresoNumero < 0) {
    container.classList = "bg-red";
    texto.innerText = `Tu nombre es ${personaje.nombre} y tu número favorito es ${personaje.numeroFav}.`;
    const detalleNegativo = document.createElement("p");
    detalleNegativo.innerText = "OJO QUE EL NÚMERO ES NEGATIVO!!";
    container.append(detalleNegativo);
} else {
    container.classList = "bg-green";
    texto.innerText = `Tu nombre es ${personaje.nombre} y tu número favorito es ${personaje.numeroFav}.`;
}
