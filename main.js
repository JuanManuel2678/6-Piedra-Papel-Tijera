// let nombre = ""

// nombre = prompt("Cual es tu nombre ")
// alert("Bienvenido" + " " + nombre + " " + "ve con Dios")
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel 📃";
  } else if (jugada == 3) {
    resultado = "Tijera ✂";
  } else {
    resultado = "Eleccion no valida";
  }
  return resultado;
}

function aleatorio() {
  return Math.floor(Math.random() * 3) + 1;
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let derrotas = 0;

while (triunfos < 3 && derrotas < 3) {
  pc = aleatorio();
  jugador = prompt("Elige: 1 para 🥌, 2 para 📃, 3 para ✂ ");
  // alert("Elegiste " + jugador)

  alert("PC Elige: " + eleccion(pc));
  alert("Tu Eliges: " + eleccion(jugador));

  // COMBATE
  if (pc == jugador) {
    alert("EMPATE");
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else {
    alert("PERDISTE");
    derrotas = derrotas  + 1;
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + derrotas + " veces.")
console.log("-------------derrotas-----------------")
console.log(derrotas);
console.log("-------------Triunfos-----------------")
console.log(triunfos);
console.log("------pc elige aleatorio -------------")
console.log(aleatorio());

// opciones jugador
// if (jugador == 1) {
//   alert("Elegiste 🥌");
// } else if (jugador == 2) {
//   alert("Elegiste 📃");
// } else if (jugador == 3) {
//   alert("Elegiste ✂");
// } else {
//   alert("Elegiste PERDER");
// }

// opciones pc
// if (pc == 1) {
//   alert("Pc elige 🥌");
// } else if (pc == 2) {
//   alert("Pc elige 📃");
// } else if (pc == 3) {
//   alert("Pc elige ✂");
// }
