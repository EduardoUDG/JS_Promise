let x = 10;

const p = new Promise((resolve, reject) => {

    if ( x == 10 ) {
        resolve('La variable es igual a 10');
    } else {
        reject('La variable no es igual a 10');
    }

});

p
.then( res => {
    console.log('Sucess: ' + res)
})
.catch( err => {
    console.log('Error: ' + err)
})