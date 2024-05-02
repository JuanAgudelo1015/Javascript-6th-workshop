setTimeout(() => {
  console.log('Mensaje 1: Inmediatamente');
}, 0)

setTimeout (() => {
  console.log('Mensaje 2: Con timeout de 0 segundos');
},0)

setTimeout(() => {
  console.log('Mensaje 3: Con timeout de 1 segundo');
}, 1000);

/**
 * Preguntas 
 * 1 - ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?
 * R\= Esto se debe ah el interprete de Javascript coloca las tareas en una cola de eventos, y las va ejecutando una por una, es decir el que tenga un retrado de 
 * 0 segundos no garantiza que se va ejecutar 
 * 
 * 2 - Que nos dice este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
 * R\= Esto quiere decir que primero se van agregando ah la cola de tareas, y luego se van ejecutando una por una.
 *  */