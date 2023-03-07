

// arreglo prueba

var arregloNumeros = [1,2,3,89,72,67,7,34,4,6,57]; // arreglo de solo números- longitud: 11, de 0 a 10.


//PUSH: AGREGAR UN ELEMENTO EN LA ÚLTIMA POSICIÓN
arregloNumeros.push(770);
console.log("Longitud PUSH:", arregloNumeros.length);
console.log("Resultado arreglo PUSH:", arregloNumeros);


//UNSHIFT: AGREGAR UN ELEMENTO EN LA PRIMERA POSICION
arregloNumeros.unshift(456);
console.log("Longitud UNSHIFT", arregloNumeros.length);
console.log("Resultado arreglo UNSHIFT", arregloNumeros);


//POP: ELIMINAR EL ULTIMO ELEMENTO O POSICION
arregloNumeros.pop();
console.log("Longitud POP", arregloNumeros.length);
console.log("Resultado arreglo POP", arregloNumeros);


//SHIFT: ELIMINAR PRIMERA POSICION
arregloNumeros.shift();
console.log("Longitud SHIFT", arregloNumeros.length);
console.log("Resultado arreglo SHIFT", arregloNumeros);


// SLICE: INDICAR UN INICIO Y UN FIN PARA RETORNAR EL ARREGLO. No incluye el final.
// posición 3 es el inicio, pos 4: [4,5]
var arregloSlice = arregloNumeros.slice(3,5);
console.log("Longitud SLICE", arregloSlice.length);
console.log("Resultado arreglo SLICE", arregloSlice);


// FOREACH: EJECUTAR UNA FUNCIÓN A TODOS LOS ELEMENTOS DEL ARREGLO.
var arregloForeach = []; 
arregloNumeros.forEach(numeroActual => {
    
    // si el elemento actual es mayor a 5, entonces poner en la última posición del arreglo arregloForeach
    if(numeroActual>5){
        arregloForeach.push(numeroActual);
    }

});

console.log("Longitud FOREACH", arregloForeach.length);
console.log("Resultado arreglo FOREACH", arregloForeach);




// MAP: RECORRE EL ARREGLO Y RETORNA SEGUN LOS LA FUNCION QUE EJECUTEMOS
// DIFERENCIA CON FOREACH: foreach no retorna nada.  MAP recorre y crea una nueva matriz o arreglo con el resultado. Map no modifica el arreglo inicial.

var arregloMap = arregloNumeros.map(function(num){
    return num * 3;
});

console.log("Longitud MAP", arregloMap.length);
console.log("Resultado arreglo MAP", arregloMap);