// function crearSumador (num1){
//   function crearSumador2 (num2){
//     suma = num1 + num2
//     return suma
//   }
//   crearSumador2()
// }
// crearSumador()

// console.log()
// Cuando declaro una funcion son parametros, cuando la llamo son argumentos
function makeAdder(x) {
  function crearSumador2 (y){
    x += y
    return x;
  }
  return crearSumador2
}
const sumar = makeAdder(5);
console.log(sumar(6));