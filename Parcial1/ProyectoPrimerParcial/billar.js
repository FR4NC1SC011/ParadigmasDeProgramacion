function cambiar_estado_mesa() {
    window.foco = document.getElementById('imagen');      // Var Global

    if (foco.src.match("focoOff")) {
        reservar();
    } else {
        desocupar();
    }
}

function reservar() {
    foco.src = "focoOn.png"           
    // getTime();
    startTime();
}

function desocupar() {
    foco.src = "focoOff.png"
    stopTime();
}


function startTime() {
    window.timerId = setInterval(() => {
        getTime()
    }, 1000);
}

function getTime() {
    let fechaActual = new Date();
    let tiempoActual = fechaActual.toLocaleTimeString();
    document.getElementById("displayTime").innerHTML = tiempoActual;
}

function stopTime() {
    clearInterval(timerId);
}
