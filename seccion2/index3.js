// const mensaje = function () {
//   console.log('se ejecuta despue de 3 segundos');
// };
// setTimeout(mensaje, 3000);
// function exitoCallback(resultado) {
//   console.log('Archivo de audio disponible en la URL ' + resultado);
// }

// function falloCallback(error) {
//   console.log('Error generando archivo de audio ' + error);
// }

// const promesa = crearArchivoAudioAsync(audioConfig);
// promesa.then(exitoCallback, falloCallback);

// console.log(promesa);


/**Notes array funtions
 * - Las funciones declaradas con solo un parametro pueden ir sin parentesis
 * - Example Funciones flecha
  const saludar = nombre => console.log(`HOla ${nombre}`)
saludar("Juan")
const sumar = (a,b)=> a + b
console.log(sumar(5,6))
 */

// Metodo cath se utiliza utiliza cuando la promesa es rechazada
// Consultar sobre el operador ternario

const miFunction = ()=>{
  let message = "Promesa resuelta"
  console.log(message)
}
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Hola"))
  }, 2000);
});
function manejarAsincronia(callback, promise){
  promise.then(callback)
}
manejarAsincronia(miFunction, promise)
// La funcion then se concatena ah la funcion inicial
