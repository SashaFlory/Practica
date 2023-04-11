//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
const num1 = 1;
const num2 = 20;

console.log("Entre los números", num1, "y", num2, ", los múltiplos de 3 son:");
for (let i = num1; i <= num2; i++) {
    if (i%3==0) {
        console.log(i);
    };
};

