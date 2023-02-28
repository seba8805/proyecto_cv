document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Gracias Por Su Visita";
}

document.getElementById('fondo').addEventListener('click', function() {
document.body.style.backgroundColor = 'black'; 
});

