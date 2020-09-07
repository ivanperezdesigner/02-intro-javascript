// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']
const [, , p3] = personajes // Acorde a las posiciones
console.log(p3)

const retornaArreglo = () => {
    return ['abc', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras)
console.log(numeros)

const useState = (valor) => {
    return [ valor, () => {console.log('hola mundo')}]
}

// Tarea
// 1. El primer valor del arr se llamara nombre
// 2. El segundo valor del arreglo se llamará setNombre 

const [nombre, setNombre] = useState('Goku')
console.log(nombre)
setNombre()