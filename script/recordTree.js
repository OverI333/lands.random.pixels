var contenedorArboles = document.getElementById("contenedorArboles");
var contenedorInfo = document.getElementById("contenedorInfo");
var contenedorID = document.getElementById("contenedorID");
var ocultarcontenedorArboles = document.getElementById("ocultarcontenedorArboles");

var showTree = document.getElementById("showTree");
const iconoA = document.getElementById('iconA');

var manejoApartado;

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("#selecradio1").checked = true;
// });

ocultarcontenedorArboles.addEventListener('click', function() {
    manejoApartado = false;
    if (contenedorArboles.style.display === "none") {
        contenedorOpciones.style.display = 'none';
        contenedorArboles.style.display = "block";
        contenedorInfo.style.display = "none";
        vaciarElemento();
    } else {
        contenedorArboles.style.display = "none";
    }
});

showTree.addEventListener('click', function() {
    if (contenedorInfo.style.display === "none") {
        contenedorInfo.style.display = "block";
        iconoA.style.transform = 'rotate(-180deg)';
        vaciarElemento();
    } else {
        iconoA.style.transform = 'rotate(0deg)';
        contenedorInfo.style.display = "none";
    }
});

function activarInputTemp() {
    // Obtener el input por su ID
    var input = document.getElementById("dato2");

    // Activar el input
    input.disabled = false;
}
function desactivarInputTemp() {
    // Obtener el input por su ID
    var input = document.getElementById("dato2");

    // Desactivar el input
    input.disabled = true;
}

function vaciarElemento(){
    var idInput = document.getElementById("dato1");
    var tempInput = document.getElementById("dato2");
    idInput.value = "";
        tempInput.value = "";
        var radioButtons = document.getElementsByName("radio");
        radioButtons.forEach(function(radioButton) {
            radioButton.checked = false;
        });
}

// var i = 0;
// var temporizadorActivo = false;
// var bolian = true;
function guardar() {
    var idInput = document.getElementById("dato1");
    var tempInput = document.getElementById("dato2");
    var id = idInput.value;
    var temp = tempInput.value;

    var minutos = 0;
    var radioSeleccionado = document.querySelector('input[name="radio"]:checked');
    var opcionSeleccionada = radioSeleccionado ? radioSeleccionado.value : null;

    if (id && opcionSeleccionada) {
        console.log("Ingreso aqui")
        const contenLand = document.createElement('section');
        const idLand = document.createElement('span');
        const tempLand = document.createElement('span');
        // const botonpausar= document.createElement('img');
        const botonEliminar = document.createElement('img');

        contenLand.classList.add('contenLand');
        idLand.classList.add('idLand');
        tempLand.classList.add('tempLand');
        // botonpausar.classList.add('botonpausar');
        botonEliminar.classList.add('botonEliminar');

        contenLand.appendChild(idLand);
        contenLand.appendChild(tempLand);
        // contenLand.appendChild(botonpausar);
        contenLand.appendChild(botonEliminar);

        botonEliminar.onclick = function() {
            contenLand.remove(); /// Elimina el botón actual
        };
        // botonpausar.style.width = '22px';
        // botonpausar.style.height = '22px';
        // botonpausar.style.background = "rgba(24, 6, 106, 0.8)";

        botonEliminar.style.width = '22px';
        botonEliminar.style.height = '22px';
        botonEliminar.style.background = "rgba(217, 42, 42,0.8)";
        

        // botonpausar.src = "img/timerPause.svg";
        botonEliminar.src = "img/delete.svg";
        idLand.textContent = id;

        if (opcionSeleccionada == 1) {
            minutos = 435;
        }
        if (opcionSeleccionada == 2) {
            minutos = 435 - 15;
        }
        if (opcionSeleccionada == 3) {
            minutos = 300;
        }
        if (opcionSeleccionada == 4) {
            minutos = temp;
        }
        

        crearTemporizador(opcionSeleccionada, minutos, tempLand);
        contenedorID.appendChild(contenLand);
        idInput.value = "";
        tempInput.value = "";
        var radioButtons = document.getElementsByName("radio");
        radioButtons.forEach(function(radioButton) {
            radioButton.checked = false;
        });

    }
}

// Código principal
function crearTemporizador( opcionSeleccionada, minutos, tempLand) {
    var worker = new Worker('worker.js');

    worker.postMessage({ minutos: minutos });

    worker.onmessage = function(e) {
        var data = e.data;
        
        tempLand.textContent = data.horas + ":" + (data.minutos < 10 ? "0" : "") + data.minutos + ":" + (data.segundos < 10 ? "0" : "") + data.segundos;
            
    };

    // botonpausar.addEventListener("click", function() {
    //     // Código para pausar o reanudar el temporizador
    // });
}
