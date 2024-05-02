// Implementa un contador utilizando closures que permita incrementar y obtener el valor actual.

// Proporciona una interfaz simple con prompts para que el usuario interactúe con el contador.

// Utiliza un bucle while para preguntar al usuario si desea incrementar el contador o salir.

/**------------------------------------------------------------------------------------- */
// Valor por defecto es 1
function count (valueDefault = 1){
  // Se crea valor inicial como contador interno
  let valueInitial = 0
  return function (){
  // Se esta sumando el valor inicial mas el parametro ingresado por el usuario
  valueInitial += valueDefault
  return valueInitial
  }
}
const counter = count(1);
let result = counter()
let i = true
while (i){
  alert(`EL valor actual del contador es ${result}`);
  let question = Number(prompt("Desea seguir incrementando\n1:Si\n2:No\n3:Salir"));
  if (question === 1){
    alert(`EL valor actual del contador es ${result += 1}`);
  }
  else if (question != 1){
    i = false
  }
}

