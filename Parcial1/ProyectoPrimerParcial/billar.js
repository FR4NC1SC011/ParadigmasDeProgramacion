function cambiar_estado_mesa(numero_mesa) {
    let foco = document.getElementById(numero_mesa); 

    switch(numero_mesa) {
        case 'imagen':
            x(foco, 'reloj_inicio_1', 'mesa1', "reloj_final_1");
            break;
        case 'imagen2':
            x(foco, 'reloj_inicio_2', 'mesa2', "reloj_final_2");
            break;
        case 'imagen3':
            x(foco, 'reloj_inicio_3', 'mesa3', "reloj_final_3");
            break;
        case 'imagen4':
            x(foco, 'reloj_inicio_4', 'mesa4', "reloj_final_4");
            break;
        case 'imagen5':
            x(foco, 'reloj_inicio_5', 'mesa5', "reloj_final_5");
            break;
        case 'imagen6':
            x(foco, 'reloj_inicio_6', 'mesa6', "reloj_final_6");
            break;
    }

}

// ----------------------------------------------------------------------
//                FUNCIONES PARA CONTROLAR LAS MESAS 
// ----------------------------------------------------------------------
function x(foco, reloj_inicio_mesa, numero_mesa, reloj_final_mesa) {
    if (foco.src.match("focoOff")) {
        reservar_mesa(foco, reloj_inicio_mesa, numero_mesa, reloj_final_mesa);
    } else {
        desocupar_mesa(foco, numero_mesa, reloj_final_mesa);
    }
}

function reservar_mesa(img_mesa, mesa_reservar, numero_mesa, reloj_final_mesa) {
    img_mesa.src = "focoOn.png"           
    clearTime(reloj_final_mesa);
    getTime(mesa_reservar, "Hora Inicio: ");
    get_price(numero_mesa);
}

function desocupar_mesa(img_mesa, mesa_n, reloj_mesa) {
    img_mesa.src = "focoOff.png"

    switch(mesa_n) {
        case 'mesa1':
            getTime(reloj_mesa, "Hora Final: ");
            stopPrice('precio1');
            break;
        case 'mesa2':
            getTime(reloj_mesa, "Hora Final: ")
            stopPrice('precio2');
            break;
        case 'mesa3':
            getTime(reloj_mesa, "Hora Final: ");
            stopPrice('precio3');
            break;
        case 'mesa4':
            getTime(reloj_mesa, "Hora Final: ")
            stopPrice('precio4');
            break
        case 'mesa5':
            getTime(reloj_mesa, "Hora Final: ");
            stopPrice('precio5');
            break;
        case 'mesa6':
            getTime(reloj_mesa, "Hora Final: ")
            stopPrice('precio6');
            break
    }
    // stopTime();
}

// ----------------------------------------------------------------------
//                FUNCION PARA CONTROLAR HORA DE LLEGADA/SALIDA 
// ----------------------------------------------------------------------
function getTime(reloj_n, string_start_end_time) {
    let fechaActual = new Date();
    let tiempoActual = fechaActual.toLocaleTimeString();
    document.getElementById(reloj_n).innerHTML = string_start_end_time + tiempoActual;
}

function clearTime(reloj_n) {
    document.getElementById(reloj_n).innerHTML = "";
}

// function stopTime(timerId) {
//     clearInterval(timerId);
// }


// ----------------------------------------------------------------------
//                FUNCIONES PARA CALCULAR PRECIO DE LAS MESAS
// ----------------------------------------------------------------------
function get_price(mesa_n) {
    switch(mesa_n) {
        case 'mesa1':
            window.price1 = setInterval(() => {
            calcular_precio('precio1')}, 1000);
            break;
        case 'mesa2':
            window.price2 = setInterval(() => {
            calcular_precio('precio2')}, 1000);
            break;
        case 'mesa3':
            window.price3 = setInterval(() => {
            calcular_precio('precio3')}, 1000);
            break;
        case 'mesa4':
            window.price4 = setInterval(() => {
            calcular_precio('precio4')}, 1000);
            break;
        case 'mesa5':
            window.price5 = setInterval(() => {
            calcular_precio('precio5')}, 1000);
            break;
        case 'mesa6':
            window.price6 = setInterval(() => {
            calcular_precio('precio6')}, 1000);
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

function calcular_precio(precio_mesa_n) {
    switch(precio_mesa_n){
        case 'precio1':
            precio = (50.00*(segundos1/3600));
            segundos1++;
            break;
        case 'precio2':
            precio = (50.00*(segundos2/3600));
            segundos2++;
            break;
        case 'precio3':
            precio = (50.00*(segundos3/3600));
            segundos3++;
            break;
        case 'precio4':
            precio = (50.00*(segundos4/3600));
            segundos4++;
            break;
        case 'precio5':
            precio = (50.00*(segundos5/3600));
            segundos5++;
            break;
        case 'precio6':
            precio = (50.00*(segundos6/3600));
            segundos6++;
            break;
    }
    document.getElementById(precio_mesa_n).innerHTML = "TOTAL: $" + precio;
}

function stopPrice(price_n) {
    switch(price_n) {
        case 'precio1':
            clearInterval(price1);
            segundos1 = 1;
            break;
        case 'precio2':
            clearInterval(price2);
            segundos2 = 1;
            break;
        case 'precio3':
            clearInterval(price3);
            segundos3 = 1;
            break;
        case 'precio4':
            clearInterval(price4);
            segundos4 = 1;
            break
        case 'precio5':
            clearInterval(price5);
            segundos5 = 1;
            break;
        case 'precio6':
            clearInterval(price6);
            segundos6 = 1;
            break
    }
}

