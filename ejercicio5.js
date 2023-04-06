//Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.
const palabra = "gato";
let num = 4;
let cadena = "";

for (let i = 0; i < num; i++) {
    cadena = cadena + " " + palabra;
}
console.log(cadena);
