let a = [1, 3, 4, 5, 10];
let mayor = 0
a.map((item) => {
    if (item>mayor){
        mayor=item;
    };
});
console.log(a);
console.log("El número mayor es", mayor);
