//Ingresar tres valores e indicar cual es el mayor y cual el menor.
let a = 2;
let b = 4;
let c = 5;

if (a>b && a>c) {
    console.log("El número mayor es", a);
} else if (b>a && b>c) {
    console.log("El número mayor es", b);
} else {
    console.log("El número mayor es", c);
}

if (a<b && a<c) {
    console.log("El número menor es", a);
} else if (b<a && b<c) {
    console.log("El número menor es", b);
} else {
    console.log("El número menor es", c);
}
