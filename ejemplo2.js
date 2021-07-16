const usuarios = [
    {
        id: 1,
        nombre: 'Marcos'
    },
    {
        id: 2,
        nombre: 'Lena'
    }
];

let telefonos = [
    {
        id: 1,
        telefono: 12345678
    },
    {
        id: 2,
        telefono: 87654321
    }
];

const obtenerUsuario = (id) => {

    return new Promise((resolve, reject) => {
        const usuario = usuarios.find( user => user.id === id )?.nombre;
        ( usuario )
            ? resolve('Usuario encontrado')
            : reject(`ERROR: El usuario con ID ${id} no existe`);
    });
}

const obtenerTelefono = (id) => {

    return new Promise((resolve, reject) => {
        const telefono = telefonos.find( tel => tel.id === id )?.telefono;
        ( telefono )
            ? resolve('Telefono encontrado')
            : reject(`ERROR: El telefono con ID ${id} no existe`);
    });
}

obtenerUsuario(1)
    .then( res => {
        console.log( res )
        obtenerTelefono(2)
            .then( message => {
                console.log(message);
            })
            .catch( err => {
                console.error(err);
            });
    })
    // .then( message => {
    //     console.log(message);
    // })
    .catch( err => {
        console.log(err);
    });