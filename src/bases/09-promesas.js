import getHeroeById from './bases/08-imp-exp'
// Promesas

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroeById(3)
//         resolve(p1)
//         // reject('No se pudo encontrar el héroe')
//     }, 2000)
// })

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err))


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id)
            p1 ? resolve(p1) : reject('No se ha encontrado un héroe a mostrar')
        }, 2000)
    })
}

getHeroeByIdAsync(59)
    // .then(heroe => console.log('heroe', heroe))
    // .catch(err => console.warn(err))
    .then(console.log)
    .catch(console.warn)