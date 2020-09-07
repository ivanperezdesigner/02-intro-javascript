// Desestructuración
// Asignación desestructurante

const personaje = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Super'
}

// Lo que quiero extraer del objeto dentro de los corchetes
const {nombre, edad, clave} = personaje
console.log(nombre)

// Si ya existe una variable con el mismo nombre se puede asignar uno nuevo usando la siguiente estructura
const {nombre: nombreNuevo} = personaje
console.log(nombreNuevo)

console.log(nombre)
console.log(edad)
console.log(clave)

// Se puede desestructurar en los parametros que recibe la función, también se pueden establecer valores por defecto
const useContext = ({nombre, edad, clave, rango='Capitán'}) => {
    // console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 345.345,
            lng:-234.678
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(personaje)
console.log(nombreClave, anios)
console.log(lat, lng)