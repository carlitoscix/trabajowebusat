function guardarDatos(){
var nombre = document.getElementById("nombre").value;
var movil = document.getElementById("movil").value;

localStorage.setItem(nombre,movil);
document.getElementById("nombre").value="";
document.getElementById("movil").value="";
actualizarDatos();
    
    }
    function recuperarDatos{
var nombre = document.getElementById("nombre").value;
localStorage.getItem(nombre);
document.getElementById("movil").value = localStorage.getItem(nombre);

    }

    function eliminarDatos(){
        var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
actualizarDatos();
}
function eliminarTodos(){
    localStorage.clear;
    actualizarDatos();
}

function actulizarDatos(){

    var registro="";
    if (localStorage.length ==0) {
        registro += ´<li>vacio</li>´;
    } else {
        for (let 1 =0; i< localStorage.length, i++){
            var key = localStorage.key(i);

            registro += ´<li>´+´ <span class="nom">´+key+´</span>´+´ <span class="nom">´+localStorage.getElementById(key)+´</span></li><br>´;
        }
    }
    document.getElementById("contactos").innerHTML = registro;
}
    