// Se esta ejecutando el mensaje en resolve, luego de que la promesa se haya resuelto
// Primero se esta ejcutando la promesa, ya que tienen mayor prioridad en la cola de tareas, que el setTimeout.

let i = true;

while (i){
  const menu = Number(prompt(`Considerando el siguiente codigo \nconsole.log('Inicio del script');

setTimeout(() => {
  console.log('Primer setTimeout');
}, 0);

setTimeout(() => {
  console.log('Segundo setTimeout');
}, 0);

Promise.resolve('Promesa resuelta').then(console.log);
console.log('Fin del script');\n\nEn que orden crees que se va ejecutar este codigo\n\n1. Inicio del script, Primer setTimeout, Segundo setTimeout, promesa resuelta, fin del script\n\n2. Inicio del script, Fin del script, promesa resuelta, Primer setTimeout, Segundo setTimeout\n\n3. Inicio del script, Segundo setTimeout, primer setTimeout, fin del script, promesa resuelta\n\n4: Salir`));
  switch(menu){
    case 4: {
      i = false
    }
    break;
    case 1: {
      alert("INCORRECTO, Ya que primero se ejecuta la promesa y luego los setTimeout debido ah que estos tiene mayor prioridad en el motor de Javascript")
    }
    break;
    case 2: {
      alert("EXACTAMENTE, Primero se ejecutan las promesas debido ah que estas tienen mayor prioridad en la cola de tareas de Javascript")
    }
    break;
    case 3:{
      alert("INCORRECTO, Ya que los setTimeout en Javascript se ejecutan de manera ascendente, es decir de arriba hacia abajo, no de abajo hacia arriba")
    }
    break;
  }
}

// console.log('Inicio del script');

// setTimeout(() => {
//   console.log('Primer setTimeout');
// }, 0);

// setTimeout(() => {
//   console.log('Segundo setTimeout');
// }, 0);

// Promise.resolve('Promesa resuelta').then(console.log);
// console.log('Fin del script');
