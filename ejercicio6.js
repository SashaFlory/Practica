//Ingresar dos valores enteros y enumerar los elementos que los separan. 
//Ejemplo 1: 2 y 6 --> 3 , 4, 5
//Ejemplo 2: 10 y 5 --> 9, 8, 7, 6
let num1 = 1;
let num2 = 9;
let vueltas = 0;

console.log("Entre el número", num1, "y el número", num2, "están los números:")
for (let i = num1+1; i < num2; i++) {
    console.log(i);
    vueltas++
}
console.log("Hay", vueltas, "números entre", num1, "y", num2);
