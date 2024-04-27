/**EL SCOPE ES EL ALCANDE QUE TIENES LAS VARIABLES
 * NOMBRE IS NOT DEFINE = QUIERE DECIR QUE LA VARIABLE EXISTE PERO SE ESTA LLAMANDO FUERA DEL BLOQUE DE CODIGO
 * VARIABLES GLOBALES = SON TODAS AQUELLAS QUE ESTAN DECLARADAS FUERA DE UN BLOQUE DE CODIGO
 * SI SE DECLARA UNA VARIABLE SIN PALARBA RESERVADA ESTA TOMARA COMO VALOR EL ALCANCE GLOBAL
 * LAS VARIABLES LOCALES SON LAS QUE ESTAN DENTRO DE LA FUNCION
 */
// Global Scope

let scope = true

while(scope){

let exampleScope = Number(prompt(`
Considerando el siguiente codigo \n\nGlobal Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();\n\n INGRESE\n\n1: Si crees que es posible acceder ah la varible globalVariable dentro de la funcion\n\n2: Si Crees que es posible acceder ah la variable funtionVarible local fuera del Scope\n
3: Si Crees que es posible acceder ah la variable blockVariable fuera de la funcion\n\n4: Salir`))
  switch (exampleScope){
    case 1: {
      alert("VERDADERO\nYa que la variable global al estar fuera del scope es decir 'El alcance global que tienen las variables' puedes acceder ah ellas simplemente con solo llamarla")
    }
    break;
    case 2: {
      alert("FALSO\n Ya que la variable local al estar dentro de una funcion solo se puede acceder ah ella dentro de esta misma funcion, es decir dentro del mismo bloque de codigo")
    }
    break;
    case 3: {
      alert("FALSO\n Ya que al intentar acceder ah una variable que esta dentro de un bloque, solo se puede acceder ah ella dentro de ese mismo Bloque")
    }
    break;
    case 4: {
      scope = false
    }
  }
}

/**ANSWER = 
 * 1 = true
 * 2 = false
 * 3 = false
 */