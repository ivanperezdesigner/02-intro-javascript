const activo = true
// let mensaje = ''

// if (activo){
//     mensaje = 'Activo'
// }else{
//     mensaje = 'Inactivo'
// }

// const mensaje = (activo) ? 'Activo' : 'Inactivo'
// const mensaje = (activo) ? 'Activo' : null // si solo queremos ejecutar el codigo cuando es true

const mensaje = activo && 'Activo'
console.log(mensaje)