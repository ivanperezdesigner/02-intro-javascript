//Objetos en JavaScript

const persona ={
    nombre: 'ivan',
    apellido: 'perez',
    edad: 37,
    direccion: {
        ciudad: 'ny',
        zipcode: 234234,
        latitud: 142.048,
        longitud: 234.234, 
    }
}

const persona2 = {...persona}
persona2.nombre = 'Luisa'

// console.table({persona})
console.log({persona})
console.log({persona2})