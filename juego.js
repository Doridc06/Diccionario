let intentos = 5;
let mapa = new Map();

mapa.set("hola", "hello");
mapa.set("bebe", "baby");
mapa.set("juego", "game");
mapa.set("azul", "blue");
mapa.set("conejo", "bunny");
mapa.set("pez", "fish");
mapa.set("rosa", "pink");
mapa.set("perro", "dog");

let aciertos = 0;

for (let i = 1; i <= intentos; i++) {
  let palabra = palabraAlAzar(mapa);

  alert("Pregunta " + i + ", Dime cual es la traduccion de: " + palabra);
  let traduccion = prompt();

  if (traduccion.toLowerCase() === mapa.get(palabra).toLowerCase()) {
    alert("Acertaste!! Bien Hecho.");
    aciertos++;
  } else {
    alert("Fallaste.. la traduccion de " + palabra + ", es: " + mapa.get(palabra));
  }
}

alert("Acertaste " + aciertos + " palabras de " + intentos);

function palabraAlAzar(mapa) {
  let numPalabra = Math.floor(Math.random() * mapa.size);

  let contador = 0;
  let resultado = "";

  for (let palabra of mapa.keys()) {
    if (contador === numPalabra) {
      resultado = palabra;
      break;
    }
    contador++;
  }
  return resultado;
}
