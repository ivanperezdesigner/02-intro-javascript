import {apiKeyG} from '../keys/keys'
import {accessKeyUnsplash} from './keys/keys'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKeyG}`)

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(console.warn)



// Test API Unsplash
const peticion2 = fetch(`https://api.unsplash.com/photos/random/?client_id=${accessKeyUnsplash}`)

peticion2
    .then(resp => resp.json())
    .then(data => {
        const {regular} = data.urls // Desestructuración de la data
        // console.log(data)
        const img = document.createElement('img')
        img.src = regular
        document.body.append(img)
    })
    .catch(console.warn)