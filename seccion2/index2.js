console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log('Error:', error.message);
}

console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log('Error:', error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return 'Función declarada ha sido llamada.';
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return 'Función expresada ha sido llamada.';
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/**
 * Questions
 * - 1- What happened when called try funcionDeclarada()
 * -R/= Cuando intente llamar ah funcion declarada, esta se ejecuta desde
 * cualquier parte del codigo, ya que al ser funciones declaradas estas toman el Scope mas alto
 *
 * 2- What happened when called try funcionDeclarada()
 * - Cuando intene llamar ah funcion expresada antes de su ejecucion me retorna un error en la consola,
 * ya que basicamente al ser funciones expresadas es decir las funciones que estan dentro de una variable,
 * tienen menos alcance global
 */
