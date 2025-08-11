let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 15;
let maximoIntentos = 3;


function asignarTextoElemento(elemento, texto) {
    let Htmlelment = document.querySelector(elemento);
    Htmlelment.innerHTML = texto;
    return;
};

function verificarIntento() {
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numerodeUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos } ${(intentos === 1) ? `un intento` : `intentos`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (intentos >= maximoIntentos) {
            asignarTextoElemento('p','Has alcanzado el numero maximo de intentos');
             document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else {//usuario no acerto
        if (numerodeUsuario > numeroSecreto) {
            asignarTextoElemento('p',"El numero es menor")
        }
        else{
               asignarTextoElemento('p',"El numero es mayor")
        }; 
    
        intentos++;
        limpiarCaja();}
    return ;
            
        };
};

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero secreto!");
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
};

function nuevoJuego(params) {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje intervalo de nuevo
    //generar el numero aleatorio
    //inicializar numero de intento 
    condicionesIniciales();
     //deshablitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled',"true");

};

function limpiarCaja () {
    let valorCaja = document.querySelector('#valorUsuario').value = "";
   
};

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumeroSorteados);

if (listaNumeroSorteados.length == numeroMaximo) {
 asignarTextoElemento('P', " Ya usaste todos los numeros posibles");
}
else{
    if (listaNumeroSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
}
else {
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;
}
}


};

function SalirDelJuego(params) {
    if (intentos > maximoIntentos ) {
        asignarTextoElemento('p','Has alcanzado el numero maximo de intentos');
    }
};

condicionesIniciales();





