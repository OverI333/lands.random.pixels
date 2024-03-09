var contenedorArboles = document.getElementById("contenedorArboles");
var contenedorInfo = document.getElementById("contenedorInfo");
var contenedorID = document.getElementById("contenedorID");
var ocultarcontenedorArboles = document.getElementById("ocultarcontenedorArboles");

var showTree = document.getElementById("showTree");
const iconoA = document.getElementById('iconA');

var manejoApartado;

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
        const botonpausar= document.createElement('img');
        const botonEliminar = document.createElement('img');

        contenLand.classList.add('contenLand');
        idLand.classList.add('idLand');
        tempLand.classList.add('tempLand');
        botonpausar.classList.add('botonpausar');
        botonEliminar.classList.add('botonEliminar');

        contenLand.appendChild(idLand);
        contenLand.appendChild(tempLand);
        contenLand.appendChild(botonpausar);
        contenLand.appendChild(botonEliminar);

        botonEliminar.onclick = function() {
            contenLand.remove(); // Elimina el botón actual
        };
        botonpausar.style.width = '22px';
        botonpausar.style.height = '22px';
        botonpausar.style.background = "rgba(24, 6, 106, 0.8)";

        botonEliminar.style.width = '22px';
        botonEliminar.style.height = '22px';
        botonEliminar.style.background = "rgba(217, 42, 42,0.8)";
        

        botonpausar.src = "img/timerPause.svg";
        botonEliminar.src = "img/delete.svg";
        idLand.textContent =  id;

        if (opcionSeleccionada == 1) {
            minutos = 435;
        }
        if (opcionSeleccionada == 2) {
            minutos = 435 - 120;
        }
        if (opcionSeleccionada == 3) {
            minutos = 435 - 120 - 15;
        }
        if (opcionSeleccionada == 4) {
            minutos = temp;
        }
        crearTemporizador(opcionSeleccionada, minutos, tempLand, botonpausar, botonpausar);
        contenedorID.appendChild(contenLand);
        idInput.value = "";
        tempInput.value = "";
        var radioButtons = document.getElementsByName("radio");
        radioButtons.forEach(function(radioButton) {
            radioButton.checked = false;
        });

    }
}

function crearTemporizador(opcionSeleccionada, minutos, tempLand,botonpausar, botonpausar) {
    var intervalo;
    var segundos = 0;
    
    if (minutos > 0) {
        // tempLand.textContent = "Minutos"+ minutos;

        intervalo = setInterval(function() {
            segundos--;
            if (segundos < 0) {
                segundos = 59;
                minutos--;
            }
            var horas = Math.floor(minutos / 60);
            var minutosRestantes = minutos % 60;
            tempLand.textContent = horas + ":" + (minutosRestantes < 10 ? "0" : "") + minutosRestantes + ":" + (segundos < 10 ? "0" : "") + segundos;
            // tempLand.textContent = " " + minutos + ":" + (segundos < 10 ? "0" : "") + segundos;

            if (minutos === 0 && segundos === 0) {
                clearInterval(intervalo);
                tempLand.textContent = "Finalizado";
                tempLand.style.color = "rgba(217, 42, 42,0.5)";
            }
        }, 1000);
    } else {
        alert("Ingrese un valor valido.");
    }

    // Agregar evento click al botón para pausar/reanudar el temporizador
    botonpausar.addEventListener("click", function() {

        if (intervalo) {
            botonpausar.src= "img/timerPlay.svg";
            clearInterval(intervalo); // Detener el temporizador
            intervalo = null; // Limpiar la referencia al intervalo
        } else {
            botonpausar.src= "img/timerPause.svg";
            // Reanudar el temporizador
            intervalo = setInterval(function() {
                segundos--;
                if (segundos < 0) {
                    segundos = 59;
                    minutos--;
                }
                var horas = Math.floor(minutos / 60);
                var minutosRestantes = minutos % 60;
                tempLand.textContent =  horas + ":" + (minutosRestantes < 10 ? "0" : "") + minutosRestantes + ":" + (segundos < 10 ? "0" : "") + segundos;

                if (minutos === 0 && segundos === 0) {
                    clearInterval(intervalo);
                    tempLand.textContent = " Finalizado";
                    tempLand.style.color = "rgba(217, 42, 42,0.5)";
                }
            }, 1000);
        }
    });
}