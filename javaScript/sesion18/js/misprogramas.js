$(document).ready(function(){
    $("a").click(function(){
        alert("has pulsado el enlace, ahora seras enviado a la apgina de la suat")
    })
})

$("#cb1").click(function(){

    $("cont1").toggle(1500);
    },function() {
        $("#cont1").toggle(1500);
})