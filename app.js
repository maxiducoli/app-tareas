console.log("Hola, " + "(" + "Uri" + "||" +  "Rafel" + "||" + "Rocío" 
            + ")" + "\n" + "\n" + 
            "Bienvenido a la entrega de mi TP." + "\n" + "\n" 
            + "PASAMOS AL DESAFÍO 1 DE LA CONSIGNA, LISTADO DE TAREAS: " + "\n" + "\n");

// Requerimos el path
const  path = require('path');
// Requerimos el File System
const fs = require('fs');
// Constante al Json
const pathTareas = path.resolve(__dirname, 'data/tareas.json');
// Constante al Array
const dataArray = fs.readFileSync(pathTareas, { encoding: 'utf8' });
// Parseamos el string dataArray a formato Json
const arrayJSON = JSON.parse(dataArray);

//console.log(arrayJSON);

arrayJSON.forEach(element => {
    console.log(element);
    
});

console.log("\n"+ "\n"+ "\n"+ "\n"+ "\n" + "Pasamos al DESAFÍO 2 DE LA CONSIGNA: ." + "\n"+ "\n");


const appArgs = process.argv[2];

//onsole.log("TU parámetro es: " + appArgs);


if (appArgs === "listar")
{
    console.log("Listado de tareas:" + "\n" + "---------------------" + "\n");
    for (let i = 0; i < arrayJSON.length; i++)
    {
        console.log(i + 1 + ". " + arrayJSON[i].titulo + " - " + arrayJSON[i].estado);
    }
} 

if (appArgs === undefined)
{
console.log("Atención - Tienes que pasar una acción" + "\n" + 
            "Las acciones disponibles son:  listar");
}

if (appArgs != "listar" && appArgs != "" && appArgs != undefined) 
{
console.log("No entiendo qué quieres hacer"+ "\n" + 
"Las acciones disponibles son: listar");
}
