function guardardatos(){
localStorage.nombre = document.getElementById("nombre").value;

localStorage.movil = document.getElementById("movil").value;


}

function recuperarDatos(){
if ((localStorage.nombre!=undefined) && (localStorage.movil!=undefined)){

    document.getElementById("datos").innerHTML = "nombre:" + localStorage.nombre+" <br> Num Celular: " +localStorage.movil;
}
else {
    document.getElementById("datos").innerHTML = "no has ingresado datos en a agenda";
}
}