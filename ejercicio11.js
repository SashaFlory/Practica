//Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Obtener el promedio de edad,
//el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
const personas = [
    {
        nombre: "Estrella",
        sexo: "F",
        edad: 10,
    },
    {
        nombre: "Raúl",
        sexo: "M",
        edad: 15,
    },
    {
        nombre: "Tormenta",
        sexo: "F",
        edad: 25,
    },
    {
        nombre: "Tom Figaro Silvestre",
        sexo: "M",
        edad: 20,
    }
];

let suma = 0;
personas.map((item) => {
    console.log(item.edad);
    suma = suma + item.edad;
});

const promedioTotal = suma/personas.length;

console.log("Suma de las edades:", suma);
console.log("El promedio es:", promedioTotal);

let menor= 100;
personas.filter((item)=> (item.sexo==="M")).map((item) => {
   if (item.edad<menor) {
    menor=item.edad;
    console.log("Hombre con edad menor:", item.nombre);
    //funciona con cinta, solucion provisoria.
   };
})