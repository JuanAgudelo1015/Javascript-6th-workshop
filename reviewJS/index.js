// // DECLARANDO LA FUNCION, con dos parametros
// // Si ah una funcion no se le pasan parametros devuelve undefined
// function saludat (nombre, edad){
//   console.log(`HOla mi nombre es ${nombre} y tengo ${edad}`)
// }
// // Aca le estoy Pasando los argumentos 
// console.log(saludat("Juan Pablo",17 + "Years Old"))

// function declarada (){
//   console.log("Esto es una funcion expresada y se puede acceder ah ella desde cualquier parte del codigo")
// }
// const funcionExpresada = function(){
//   console.log("Esto es una funcion expresada,\
//               \nsi llamamos ah esta funcion antes de ser inicializada JS nos dira Cannot access 'funcionExpresada' before initialization")
// }
// funcionExpresada();


// function map(f, a) {
//   let result = []; // Crea un nuevo arreglo
//   let i; // Declara una variable
//   for (i = 0; i != a.length; i++) result[i] = f(a[i]);
//   return result;
// }
// const f = function (x) {
//   return x * x * x;
// };
// let numbers = [0, 1, 2, 5, 10];
// let cube = map(f, numbers);
// console.log(cube);

// Crea una función llamada numeroMayor() que toma tres números como entrada y retornar
//  el numero mayor de ellos, si son iguales devolver un String «son iguales».
// EJERCICIO 1 
function numGreater (a,b,c){
    if(a > b && a > c){
    alert(`EL numero mayor es ${a}`)
    return a;
  }else if (b > a && b > c){
    alert(`EL NUMERO MAYOR ES ${b}`)
    return b;
  }else if (c > b && c > a){
    alert(`El numero mayor es ${c}`)
    return c;
  }else {
    alert("son iguales xxdd")
    return;
  }
}
// console.log(numGreater(1,-1,2));

// Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal 
// (no importa si es mayúscula o minúscula), y devuelva False en caso contrario

// EJERCICIO 2
function esVocal (carater){
  const arrayVowels = ["a", "A" ,"e", "E", "i", "I", "o", "O", "u", "U"];
  for (let i = 0; i < arrayVowels.length; i++){
    let iterador = arrayVowels[i]
    if (carater === iterador){
      alert("Es vocal")
      return true
    }
  }
  alert("No es vocal")
  return false;
}


// EJERCICIO 3
// Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter,
//  retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».


// LA IDEA PRINCIPAL ES MULTIPLICAR LETRAS POR NUMEROS
// EXAMPLE = x * 5 = xxxxx

// Creo una funcion con dos parametros
function generarCaracteres (numero, carateres){
  // 
  let valorAlmacenado = ''
  for (let i = 0; i < numero; i++){
    // La variable valorAlmacenado es la que me esta guardando toda la informacion de la iteracion,
    // Luego la esta concatenando con la variable caracteres
    valorAlmacenado += carateres
  }
  return valorAlmacenado
}
// console.log(generarCaracteres(1, "x"));

// EJERCICIO 4 
// Crear una función sumaArreglo() que tome como parámetro un arreglo de números, 
// retornar la longitud del arreglo + la suma de todos los números del arreglo

// Ingrese 5 numeros

const miArrayNumeros = [1,2,3,4,5,6,7,8,9,10]
function sumaArreglo(arreglo) {
  let message = '';
  let suma = 0
  message = 'La longitud del arreglo es '
  message += arreglo.length;
  for (i = 0; i < arreglo.length; i++){
    suma += arreglo[i]
  }
  return message + ' y La suma es de todos los numeros es ' + suma;
}
// console.log(sumaArreglo(miArrayNumeros))


// EJERCICIO 6
// Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números,
//  retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.

const multiplicación = [6,2,3,4,5];

function multiplicarArreglo(arreglitoMulti){
  let message = "El resultado es "
  const numMenor = Math.min(...arreglitoMulti);
  const numMayor = Math.max(...arreglitoMulti);
  message += numMenor * numMayor
  return message;
}
// console.log(multiplicarArreglo(multiplicación))
// Crear una función con el nombre de booleanoArray() que tome dos arreglos de
//  números como parámetro y que retorne un booleano, unir los dos arreglos en uno
//   solo, si la longitud de el nuevo arreglo es mayor o igual a 10 que retorne true
//    si es menor a 10 que retorne false.

// El operador de propagacion en Javascript, se utiliza para descomponer los elementos de 
// un iterable, es decir los pare clave valor
function booleanoArray(arrayOne, arrayTwo){
  let newArray = [...arrayOne,...arrayTwo]
  for (i = 0; i < newArray.length; i++){
    if (newArray.length >= 10){
      return true
    }else {
      return false
    }
  }
}
// console.log(booleanoArray([1,2],[3,4]))

// Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo,
//  cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6]
function funcionArray (arra1, arra2){
  let newArray = [...arra1,...arra2];
  newArray = newArray.map((elemento) => {
    return elemento * 2
  })
  return newArray;
}

console.log(funcionArray([2,3,4,5,6,7],[4,6,7,8,9,9]))