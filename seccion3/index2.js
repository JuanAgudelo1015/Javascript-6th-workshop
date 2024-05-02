let intervaTime = Number(prompt("Ingrese el numero de segundos para ver el mensaje"));
function userMessage(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = "Hola"
      if (message){
        resolve('promiseResolve')
      }else {
        reject(new Error ('Error: Algo ah fallado'))
      }
    }, intervaTime * 1000)
  });
}
// Llamo ah la funcion que devuelve una promesa
userMessage()
// La funcion flecha que se ejecuta despues del then, esta haciendo referencia al resultado de la promesa resuelta
.then(result => {
  console.log('Resultado:', result);
  if (result === "promiseResolve"){
    console.log(`Hola user, la promesa se ejecuto despues de ${intervaTime} segundos`)
  }
})
.catch((error) => {
  console.error("¡Ups, Hubo un error", error)
})