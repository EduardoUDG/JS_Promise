//* Uno de los usos más comunes de cuando necesitamos 
//* usar un promesa, es cuando utilizamos operaciones
//* asincronas.

//! Asincrona
//* Es aquella que se ejecuta por aparte del proceso principal.
//* Osea no sigue la secuencia de nuestro código. La ejecuta y 
//* dependiendo de cuanto tarde nuestra operación en ejecutarse
//* se podra ejecutar antes o despues de la siguiente linea de código

// let x = 10;

// console.log('1. proceso iniciado...');

// setTimeout(() => {
//     x = x * 3 + 2;
//     console.log('2. proceso terminado'); 
// }, 2000);

// console.log('3. el resultado es: ' + x);


//* =========================

let x = 10;
const promesa = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        x = x * 3 + 2;
        console.log('2. proceso terminado'); 
        resolve(x);
    }, 2000);
    
});

console.log('1. proceso iniciado...');

promesa
.then( res => {
    console.log('3. El resultado es: ' + res);
})
