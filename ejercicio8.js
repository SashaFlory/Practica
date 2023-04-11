//Obtener la suma de los elementos de un array.
let a = [1, 2, 4, 5];

let suma = a.reduce(function(previous, current) {
    return previous + current;
});

console.log("La suma de los números", a, "da como resultado el número", suma);