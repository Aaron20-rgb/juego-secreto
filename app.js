let númerosecreto = 0;
let intentos = 0
let listadenumerossorteados = []
let numeromaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;   
}

function verificarintento() {
    let numerousuario = parseInt(document.getElementById('valorusuario').value);
    
    if (numerousuario === númerosecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' :'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numerousuario > númerosecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        }else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarcaja();
    }
    return;
} 

function condicionesiniciales() {
    asignarTextoElemento('h1','juego del número secreto!');
    asignarTextoElemento('p',`indica un número del 1 al ${numeromaximo}`);
    númerosecreto = generarnúmerosecreto()
    intentos = 1
}

function limpiarcaja() {
    document.querySelector('#valorusuario').value = '' 
}

function generarnúmerosecreto() {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    //si ya sorteamos todos los numeros
    if(listadenumerossorteados.length == numeromaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else {
        //si el numero generado esta incluido en la lista
        if (listadenumerossorteados.includes(numerogenerado)) {
            return generarnúmerosecreto()
        }else {
            listadenumerossorteados.push(numerogenerado)
            return numerogenerado
        }
    }
}

function reiniciarjuego() {
    //limpiar caja
    limpiarcaja()
    //Indicar el mensaje de intervalos de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesiniciales()
    //Desabilitar el botton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    
}

condicionesiniciales()
