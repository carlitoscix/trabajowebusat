function guardarDatos() {
    let nombre = document.getElementById("nombre").value;
    let movil = document.getElementById("movil").value;
    let email = document.getElementById("email").value;

const datos  = {
  
    'movil':movil,
    'email':email,
}

    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    actualizarDatos();
}

function recuperarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("movil").value = localStorage.getItem(nombre);
    document.getElementById("email").value = localStorage.getItem(nombre);
   
}

function eliminarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodos() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>vacio</li>';
    } else {
        for (let i = 0; i <= localStorage.length; i++) {
            var key = localStorage.key(i);
            registro += '<li>' + '<span class= "nom">' + key + '</span>' + '<span class = "nom">' + localStorage.getItem(key) + '</span> </li> <br>';
        }
    }
    document.getElementById("contactos").innerHTML = registro;
}


