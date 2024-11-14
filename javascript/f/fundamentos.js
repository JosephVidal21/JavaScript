
//tipo de datos 
let nombre = "Brayan";

let edad = 18;

let mayorEdad = true;

let estatura;

console.log(typeof nombre);

console.log(typeof edad);

console.log(typeof mayorEdad);

console.log(typeof estatura);

//tipos de datos complrjos 
let frutas = ['Pera', 'Manzana', 'Melon'] ;

let auto = {
modelo: '2024',
marca: 'Chevrolet',
color: 'Negro',
cilindraje: '2100',
tipo: 'Camioneta',

}


//concatenaado varialbles  
console.log("Bienvenido usuario  " +  nombre + " su edad es " +  edad  + ' y su fruta favorita es ' + frutas [1]);

//estructuras de control condicional 

if (edad > 25) {
    console.log("Es un adulto")
}
else if (edad > 18){

    console.log("Es un joven")
}
else if  ( edad> 13){ 

    console.log("Es un pelado")

}
else {
    console.log("Es un joven")
}


let tipoSucripcion = "sd"

switch (tipoSucripcion) {
    case "Basico":
        console.log("Muy suave o pobre")
        break
    case "gold":
        console.log("Buen plan, pero sigue siendo pobre")
        break
    case "platinium":
        console.log("El mejor plan")
        break
    default:

        console.log("Este plan no existe")
        break
     
}

//Estructura de control de bucles

let contador = 0;

while (contador < 11) {
    console.log("Este es el numero " + contador );
    contador = contador + 1;
}


for (let i = 0 ; i < 111 ; i = i + 10 ){
    console.log("contador con for numero" + i);
}