const _ = require('lodash');
const argv = require('yargs').argv;

let comando = process.argv;
console.log(comando);


let x = { "nombre": "Yazin" }
let y = { "apodo": "Geek" }
let z = [
    { nombre: "Yazin", apellido: "Castaño", edad: 30 },
    { nombre: "Esther", apellido: "Reyes", edad: 26 }
]

/*
let resultado = _.assign(x, y);
console.log(resultado);

_.times(2, () => console.log('hola'));
*/

/*
let resultado = _.find(z, { nombre: "Yazin", apellido: "Castaño" });
console.log(resultado);
*/