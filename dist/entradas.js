"use strict";
// 1. Importar readline para pedir datos por consola
//modifico la forma de importar de commonJS a ES6
const readline = require("readline");
// 2. Crear la interfaz para leer y escribir en consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
/* 3. Función auxiliar para pedir entradas al usuario
  -en question se especifica el argumento del tipo string
  -Promise<string> la funcion devuelve una promesa que resuelve un string*/
function input(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
//la funcion close no retorna nada, por lo que se pone void
function close() {
    rl.close();
}
module.exports = { input, close };
