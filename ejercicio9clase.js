let a = [10, 8, 9, 15, 21, 18, 19];
let suma = 0;

a.filter((item) => (item>=15 && item<=20)).map((item) => {
    console.log(item);
    suma=suma+item;
});

console.log("la suma de los números es de:", suma);