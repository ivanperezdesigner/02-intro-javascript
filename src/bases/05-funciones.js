// Funciones en JavaScript

// Siempre usar const para las funciones
const saludar = function (nombre) {
    return `Hola ${nombre}`
}

// Funciones flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`
}

// Cuando es un solo return se puede usar en una sola línea
const saludar3 = (nombre) => `Hola ${nombre}`

// Funciones sin argumentos
const saludar4 = () => `Hola mundo`

// Funciones que retornan objetos (usar paréntesis)
const getUser = () => ({
    username: 'ivanperez',
    password: 'abc123',
})

const user = getUser()

console.log(saludar('Luisa'))
console.log(saludar2('Nicolas'))
console.log(saludar3('Eduardo'))
console.log(saludar4())
console.log(user)

// Tarea
// 1. Transformar a una función de flecha
// 2. Retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'abc123',
//         username: nombre,
//     }
// }

// 1.
const getUsuarioActivo = (nombre) =>({
    uid: 'abc123',
    username: nombre,
})

// 3.
const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)