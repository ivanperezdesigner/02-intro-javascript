import {apiKeyG} from './keys/keys'
// async sirve para retornar una promesa en una función
const getImage = async() => {
    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKeyG}`)
        const {data} = await resp.json()
        const {url} = data.images.original
        const img = document.createElement('img')
            img.src = url
            document.body.append(img)
    } catch (error) {
        console.error(error)
    } 
}
getImage()