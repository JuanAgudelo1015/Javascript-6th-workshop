const cars = `[
  {
    "modelo": "MCLAREN",
    "Precio": 50000,
    "EsLindo": true
  }
]`;
console.log(typeof cars);
// Convirtiendo esta cadena ah un objeto con la siguiente propiedad

const jsonDate = JSON.parse(cars);
console.log(typeof jsonDate)

const filterPrice = jsonDate.filter((price) => price.Precio >= 50000);
console.log(filterPrice)
const conviertiendoFormatoJson = JSON.stringify(filterPrice);
console.log(typeof conviertiendoFormatoJson);

// fyleSystem
const fs = require('fs');

const newCars = {
  modelo: 'Mini cuper',
  produccion: 2024,
  VelMax: 150
}

const nuevosCarros = JSON.stringify(newCars);

fs.writeFile('main.json', nuevosCarros, (error) =>{
  if (error) throw error;
  console.log('información recibida')
});