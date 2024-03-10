// worker.js
self.addEventListener('message', function(e) {
    var datos = e.data;
    var minutos = datos.minutos;
    var segundos = 0;

    var intervalo = setInterval(function() {
        segundos--;
        if (segundos < 0) {
            segundos = 59;
            minutos--;
        }
        var horas = Math.floor(minutos / 60);
        var minutosRestantes = minutos % 60;
        self.postMessage({
            horas: horas,
            minutos: minutosRestantes,
            segundos: segundos
        });

        if (minutos === 0 && segundos === 0) {
            clearInterval(intervalo);
            self.postMessage({ finalizado: true });
        }
    }, 1000);
});
