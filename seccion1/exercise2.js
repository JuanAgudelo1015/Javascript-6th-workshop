// vars call

let hoisting = true;
while (hoisting){
  let exampleHoisting = Number(prompt(`
  Hoisting \nConsiderando el siguiente codigo\n
  // vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);\n
  // functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
} 

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};\nIngrese una opcion\n 1: Si crees que "a" va mostrar el valor de 1 en la consola`))
  switch (exampleHoisting) {
    case 1: {
      alert("FALSO\n ")
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
      hoisting = false
    }
  }
}


/**  FUNCIONES DECLARADAS =  quiere decir que son asignadas ah la memoria, es decir, podemos acceder ah ella
en cualquier parte del codigo
FUNCIONES EXPRESDAS = Basicamente es una variable que contiene adentro una funcion
*/ 

