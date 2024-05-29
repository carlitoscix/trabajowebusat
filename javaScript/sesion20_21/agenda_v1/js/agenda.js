function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value

    localStorage.movil = document.getElementById("movil").value
}


function recuperarDatos() {
    if (localStorage.nombre != undefined && localStorage.movil != undefined) {
        document.getElementById("datos").innerHTML = `El nombre es ${localStorage.nombre}  y el movil es ${localStorage.movil}`;
    } else {
        document.getElementById("datos").innerHTML = "No has ingresado datos en la agenda";
    }
}