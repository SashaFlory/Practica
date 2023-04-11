//Sumar solo los elementos pares de un array.
let array =  [1, 2, 3, 4, 7, 8, 10];

let pares = array.filter(function(par) {
    return par%2===0;
});
let suma = pares.reduce(function(previous, current) {
    return previous + current;
});

console.log("Números del conjunto:", array);
console.log("Números pares:", pares);
console.log("Suma de números pares:", suma)
