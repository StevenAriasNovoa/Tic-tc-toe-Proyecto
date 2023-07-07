var multijugador = "P1";
var jugadores = "P2";
var juegoTerminado = false;
const x = "X";
const o = "O";
let estadoJuego = "P1";

const celditas = document.querySelectorAll(".celdas");
console.log(celditas)
for (let index = 0; index < 9; index++) {
    celditas[index].addEventListener("click",() => {
        if (multijugador == "P2") {
            console.log("CUADRADOdddddddddddddddd", i);
        } else {
            if (estadoJuego == "P1") {
                celditas[index].innerText = x;
                validarDiaD();
                validarDiaB();
                validarColumFilas();
                estadoJuego = estadoJuego === "P1" ? "P2" : "P1";
                if (juegoTerminado==false){
                setTimeout(turnoIa, 300)
            }
            }
        }
    })
};

// for (let i = 0; i < celditas.length; i++) {

//     celditas[i].addEventListener("click", function() {
//         if (juegoTerminado===true) {
//             return;
//         }
//         if (celditas[i].innerHTML=="") {
//             celditas[i].innerHTML=x;
//             if (validarColumFilas()==="O") {
//                 console.log("TE GANÓ UN BOT")
//             }else{
//                 if (validarDiaB()==="X") {
//                     swal('GANASTES !!')
//                     juegoTerminado=true;
//                 }else{
//                 let colo = noSobre()
//                     setTimeout(() => {
//                         celditas[colo].innerHTML="O"
//                         if (validarG()=="O") {
//                             swal('TE GANÓ UN BOT !!')
//                             juegoTerminado=true
//                         }
//                     }, 500);
//                 validarColumFilas();
//                     validarDiaD();
//                     validarDiaB();}
//             }
//         }
//     }) 
// }

function turnoIa() {
    var celdaDisponible = [];
    // var turno = "X";
    celditas.forEach(o => {
        if (o.textContent === "") {
            celdaDisponible.push(o);
        }
    });
    estadoJuego = estadoJuego === "P1" ? "P2" : "P1";
    let ram = Math.floor(Math.random() * celdaDisponible.length);
    var jugarcomputadora = document.getElementById(celdaDisponible[ram].id);
    jugarcomputadora.innerHTML = o
    validarDiaD()
    validarDiaB()
    validarColumFilas()
    // console.log(turnoIa);//Yo sé que esto no tiene sentido pero por alguna razon el programa no funciona sin el NO TOCAR 
}


// --------------turno computadura

var celdas = document.querySelectorAll (".celdas");

for (let indice = 0; indice < celdas.length; indice++) {
    celdas[indice].addEventListener("click",function (){
        (indice).innerHTML
    })
}

// function turnoComputadora (){
//     let celdasVacias = [];
//     for (let celdasLista = 0; celdasLista < celdas.length; celdasLista++) {
//         const element = celdas[celdasLista];
//     }if  (element.innerHTML==""){
//         celdasVacias.push(element);
//     }
//     var randomm = Math.floor (Math.random()*celdasVacias.length);
// }

// let celdasDeIa = celdasVacias [randomm];
// let celdaDeIa=document.getElementById(celdaDeIa.id);
// celdaDeIa.innerHTML=Ia;

var celdasLista = [

    [{ celda: "c-00", jugador: "" }, { celda: "c-01", jugador: "" }, { celda: "c-02", jugador: "" }],
    [{ celda: "c-10", jugador: "" }, { celda: "c-11", jugador: "" }, { celda: "c-12", jugador: "" }],
    [{ celda: "c-20", jugador: "" }, { celda: "c-21", jugador: "" }, { celda: "c-22", jugador: "" }],

];

var jugadorActual = "P1";
var jugador = "X";
let ganador = false;

function validarColumFilas() {
    const valores =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
    for (let combinacion of valores){
        let [a,b,c]=combinacion
        if (celditas[a].textContent==="X" && celditas[b].textContent==="X" &&
        celditas[c].textContent==="X") {
            juegoTerminado=true
            swal('HAS GANADO, FELICIDADES')
            return celditas[a].textContent
        }
        else if(celditas[a].textContent==="O" && celditas[b].textContent==="O" &&
        celditas[c].textContent==="O"){
            swal('HAS GANADO,FELICIDADES')
            return celditas[a].textContent
        }
    }
    if (empate()){
        juegoTerminado=true
        swal('HAS EMPATADO')
    }
    return null
}

// -----------------------------------------funcion a pata columna----------------
// function validarcolumna1() {
    
//     if (celditas[0].textContent == "X" && celditas[1].textContent == "X" && celditas[2].textContent == "X") {
//         swal("ganaste en la primer columna")
//     } else {
//         return false
//     }
// }

function validarDiaD() {

    if (celditas[2].textContent == "X" && celditas[4].textContent == "X" && celditas[6].textContent == "X" ||
        celditas[2].textContent == "O" && celditas[4].textContent == "O" && celditas[6].textContent == "O") {
        juegoTerminado=true
        swal('HAS GANADO, FELICIDADES')
        
    } else {
        return false
    }
}

function validarDiaB() {
    if (celditas[0].textContent == "X" && celditas[4].textContent == "X" && celditas[8].textContent == "X" ||
        celditas[0].textContent == "O" && celditas[4].textContent == "O" && celditas[8].textContent == "O") {
        juegoTerminado=true 
        swal('HAS GANADO, FELICIDADES')
    } else {
        return false
    }
}

// -----------------exactamente lo mismo ---------------------
// function validarDiagonal (){

//     let tamannioMatriz = 3;
//     let contadorFila = 2;
//     let ganador = false
//     for (let contadorColumna = 0 ; contadorColumna < tamannioMatriz ; contadorColumna ++){
//         if (celdasLista[contadorFila][contadorColumna].jugador ===jugadorActual){
//             ganador= true;
//         } else {
//             ganador= false;
//             break;
//         } 
//         contadorFila-=1;
//     }
//     return ganador;
// }
// console.log("Ganó X en la diagonal 0? ", validarDiagonal(1, "x"));
// validarDiagonal();

var idBotonG = document.getElementById("idBotonG");
function actualizarTablero(idBotonG) {
    for (let indicefila = 0; indicefila < celdasLista.length; indicefila++) {
        let fila = celdasLista[indicefila];
        for (let indicecolumna = 0; indicecolumna < fila.length; indicecolumna++) {
            if (celdasLista[indicefila][indicecolumna].celda === idBotonG); {
                celdasLista[indicefila][indicecolumna].jugador = jugadorActual;
                validarCloumna(indicecolumna, jugadorActual) ||
                    validarFila1(indicefila, jugadorActual) ||
                    validarDiaB(jugadorActual) ||
                    validarDiaD(jugadorActual);
                if (ganador === true) {
                    swal('EL JUGADOR' + jugadorActual, 'HA GANADO');
                    // conta++;
                    // contadorGanes.innerHTML = contador;
                }
                break;
            }
        }
    }
}

var contadorGanes=document.getElementById("circulitos")
let contadorDeLaCompu=document.querySelector("circuloP1")
let contadorJugador=document.querySelector("circuloIA")

function contador() {
    if (ganador == "X" ) {
        contadorJugador ++; 
    } else {
        contadorDeLaCompu++;
    } 
}

/*function reproducirVictoria() {
    let botonAudio = new Audio ("src/img/crystals-and-voices_bip_4-122669.mp3")
    botonAudio.play();
}
*/

var botones =document.getElementById("reiniciar");
botones.addEventListener("click", reset);

function reset() {

    for (let i = 0; i < celditas.length; i++) {
        celditas [i].innerText = "";
    }     for (let indicefila = 0; indicefila < celdasLista.length; indicefila++) {
        
        let fila = celdasLista[indicefila];
        for (let indicecolumna = 0; indicecolumna < fila.length; indicecolumna++) {
            celdasLista[indicefila] [indicecolumna].jugador="";
            juegoTerminado=false
            }
        }
    }

function empate() {
let empate = true; 
for (let celdaDisponible of celditas){
    if (celdaDisponible.textContent == ""){
        empate= false;
        break;
    }
}
return empate;
}

