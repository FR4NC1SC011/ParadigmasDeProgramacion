function cambiar_estado_mesa(numero_mesa) {
    let foco = document.getElementById(numero_mesa); 

    switch(numero_mesa) {
        case 'imagen':
            x(foco, 'reloj1', 'mesa1');
            break;
        case 'imagen2':
            x(foco, 'reloj2', 'mesa2');
            break;
    }

}




// ----------------------------------------------------------------------
//                FUNCIONES PARA CONTROLAR LAS MESAS 
// ----------------------------------------------------------------------
function x(foco, reloj_mesa, numero_mesa) {
    if (foco.src.match("focoOff")) {
        reservar(foco, reloj_mesa, numero_mesa);
    } else {
        desocupar(foco, 'mesa1');
    }
}

function reservar(img_mesa, mesa_reservar, numero_mesa) {
    img_mesa.src = "focoOn.png"           
    // getTime();
    startTime(mesa_reservar);
    get_price(numero_mesa);
}

function desocupar(mesa, mesa_n) {
    mesa.src = "focoOff.png"

    switch(mesa_n) {
        case 'mesa1':
            stopPrice('precio1');
            break;
        case 'mesa2':
            stopPrice('precio2');
            break;
 
        
    }
    stopTime();
}

// ----------------------------------------------------------------------
//                FUNCIONES PARA EL RELOJ 
// ----------------------------------------------------------------------

//TODO: Mostrar Hora de Inicio y Hora Final

function startTime(numero_reloj) {
    let timerId = setInterval(() => {
        getTime(numero_reloj)
    }, 1000);
}

function getTime(numero_reloj) {
    let fechaActual = new Date();
    let tiempoActual = fechaActual.toLocaleTimeString();
    document.getElementById(numero_reloj).innerHTML = tiempoActual;
}

function stopTime(timerId) {
    clearInterval(timerId);
}


// ----------------------------------------------------------------------
//                FUNCIONES PARA CALCULAR PRECIO DE LAS MESAS
// ----------------------------------------------------------------------
function get_price(numero_mesa) {
    switch(numero_mesa) {
        case 'mesa1':
            window.price1 = setInterval(() => {
            calcular_precio('precio1')}, 1000);
            break;
        case 'mesa2':
            window.price2 = setInterval(() => {
            calcular_precio('precio2')}, 1000);
            break;
    }
}



// Variables para controlar los segundos de cada mesa individualmente
window.segundos1 = 1;
window.segundos2 = 1;
window.segundos3 = 1;
window.segundos4 = 1;
window.segundos5 = 1;
window.segundos6 = 1;

function calcular_precio(precio_mesa) {
    switch(precio_mesa){
        case 'precio1':
            precio = (50.00*(segundos1/3600));
            segundos1++;
            break;
        case 'precio2':
            precio = (50.00*(segundos2/3600));
            segundos2++;
            break;
    }
    document.getElementById(precio_mesa).innerHTML = "TOTAL: $" + precio;
}

function stopPrice(price_n) {
    switch(price_n) {
        case 'precio1':
            clearInterval(price1);
            segundos1 = 1;
            break;
        case 'precio2':
            clearInterval(price2);
            break;
    }
}

