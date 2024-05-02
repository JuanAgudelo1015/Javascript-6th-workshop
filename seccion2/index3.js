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

// Funcion callback


const miFunction = () => {
  let message = 'Promesa cumplida y callback ejecutado';
  console.log(message);
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Hola"))
  }, 2000);
});

function manejarAsincronia(callback, promise) {
  // Luego de que la promesa se resulva  llamo al callback
  promise.then(callback);
}
manejarAsincronia(miFunction, promise)


/**
 * Responde las siguientes preguntas 
 * - ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
 * R\= De acuerdo al tiempo que se le de ah la promesa, esta se tardara mas, oh menos tiempo en ejecutarse
 * 
 * - ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
 * R\=  Le podria añadir otros metodos como cath, oh algunos metodos que validen errores de rechazo
 * 
 * - ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
  R\= Si, ya que podria modificar el callback para que me acepte dos parametros, uno para en caso de que la promesa haya sido resuelta, y otro para el caso de rechazo,
  luego desde la funcion manejarAsincronia, puedo llamar ah diferentes parted del callback dependiendo del resultado de la promesa */

  