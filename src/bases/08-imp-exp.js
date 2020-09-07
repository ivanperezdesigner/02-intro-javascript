// import heroes, {owners} from '../data/heroes'
import heroes from '../data/heroes'

// console.log(owners)

//  Funcion find devuelve un elemento buscado 
const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id)
}
// console.log(getHeroe(1))


//  Funcion filter devuelve un arreglo buscado 
const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner)
}
// console.log(getHeroesByOwner('DC'))

export {
    getHeroeById as default,
    getHeroesByOwner
}