const Change = require('chance')

const change = new Change()

const randomName = change.name()
const randomAge = change.age()
const randomEmail = change.email()

console.log('Nombre aleatorio: ', randomName)
console.log('Edad aleatoria: ', randomAge)
console.log('Email aleatorio: ', randomEmail)
