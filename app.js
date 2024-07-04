let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 100;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsurio = parseInt(document.getElementById('valorUsuario').value);
    
      if (numeroDeUsurio === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsurio > numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');

        } else  {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
      }



     return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else{

    }


    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto!');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    // Deshabilitar el botón de "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();