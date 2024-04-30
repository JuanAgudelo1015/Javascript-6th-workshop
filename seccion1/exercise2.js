// vars call

let hoisting = true;
while (hoisting) {
  let exampleHoisting = prompt(`
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
`);
  let useroption = Number(
    prompt(`const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};\nIngrese una opcion
                      \n1: Si crees que "a" va mostrar el valor de 1 en la consola
                      \n2: Si crees que "b" va mostra el valor de 2 en la consola
                      \n3: Si crees va mostrar el valor de "3" en la consola
                      \n4: Si crees que funcion declarada puede ser llamada en cualquier parte del codigo
                      \n5: Si crees que funcion expresada puede ser llama en cualquier parte del codigo
                      \n6: Salir`)
  );
  switch (useroption) {
    case 6: {
      hoisting = false;
    }
    case 1:
      {
        alert(
          'FALSO\n Ya que las variables declaradas con var son inicializadas con undefined'
        );
      }
      break;
    case 2:
      {
        alert(
          'FALSO\n Ya que las variables declaradas con let solo pueden ser accedidas despues de ser declaradas'
        );
      }
      break;
    case 3:
      {
        alert(
          'FALSO\n Ya que las constantes declaradas solo pueden ser accedidas despues de ser declaradas'
        );
      }
      break;
    case 4:
      {
        alert(
          `VERDADERO\n Ya que las funciones declaradas al ser declaradas se reserva un espacio en memoria y podemos acceder ah ellas en cualquier parte del codigo`
        );
      }
      break;
    case 5: {
      alert(
        'FALSO\n Ya que al ser funciones expresadas solo se pueden acceder ah ellas antes despues de ser inicializadas'
      );
    }
  }
}

/**  FUNCIONES DECLARADAS =  quiere decir que son asignadas ah la memoria, es decir, podemos acceder ah ella
en cualquier parte del codigo
FUNCIONES EXPRESDAS = Basicamente es una variable que contiene adentro una funcion
*/