/*
const fs = require('fs');
*/


/****************************************************
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`error ${error}`);
    } else {
        console.log(data);
    }
});

console.log('Segundo');
*********************************************************
*/

/*
**********************************************************
let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

console.log('Finalizado');
************************************************************
*/


/*********************************************************
fs.rename('data_reno.txt', 'data.txt', (error) => {
    if (error) throw error;
    console.log('!Renombrado!');
});
**********************************************************
*/

/*
*****************************************************************
fs.appendFile('data.txt', '\nGracias por el mensaje', (error) => {
    if (error) console.log(`Error ${error}`);
    console.log('Archivo abierto');
})
******************************************************************
*/

/*
***********************************************************************
fs.unlink('data2.txt', (error) => {
    if (error) throw error;
    console.log('Arhivo eliminado correctamente');
});
************************************************************************
*/



/*
***********************************************************************
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

fs.readdir('./../../NodeJS', (error, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
*************************************************************************
*/

/*
**************************************************************************
fs.readdirSync('./../../NodeJS').forEach(file => {
    console.log(file);
});
****************************************************************************
*/