let reservations = [];
let i = true;
function generatorId() {
  let id = 1;
  return function () {
    return id++;
  };
}
// REALIZAR LA CONEXION CON EL DATA.JSON
const url = 'SystemHotelReservation/data.json';
function cargarYMostrarData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          // El response.ok es el metodo que maneja la validacion del error en la consola
          // devuelve true oh false
          if (!response.ok) {
            throw new Error('Error al cargar los datos.');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Habitaciones:', data.rooms);
          console.log('Tipos de Habitaciones:', data.roomTypes);
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    }, 1000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json

cargarYMostrarData().then(({ rooms, roomTypes }) => {
  const generadorId = generatorId();
  // FUNCION PARA GENERAR RESERVA
  function booksReservations(dateInitial, dateEnd, guestName) {
    const userInput = Number(prompt(
      'Ingrese el numero de habitacion ah reservar:' +
        rooms
          .map((room) => {
            return `\nRoom Number: ${room.number} (${
              roomTypes.find((type) => type.id === room.roomTypeId).name
            })`;
          })
          .join(', ')
    ));
    if (userInput < 101 || userInput > 108){
      alert('Ingrese un numero valido');
      return;
    }
      let objectReservation = {
        identity: generadorId(),
        fechaInicio: dateInitial,
        fechaFinal: dateEnd,
        nombreDelHuesped: guestName,
      };
      reservations.push(objectReservation);
      alert(
        `El id es: ${objectReservation.identity}\nEl numero de habitacion es: ${objectReservation.numberRoom}\nLa fecha de Inicio es: ${objectReservation.fechaInicio}\nLa fecha final es: ${objectReservation.fechaFinal}\nBajo el nombre de ${objectReservation.nombreDelHuesped}`
      );
  }
    while (i) {
      const option = Number(
        prompt(`Bienvenido al Hotel las Bahamas
                                  \nIngrese una opcion
                                  \n 1: Reservar habitacion
                                  \n2: Verificar Disponibilidad de habitaciones
                                  \n3: Ver reservas actuales
                                  \n4: Cancelar Reserva
                                  \n5: Salir`)
      );
      switch (option) {
        case 5:
          {
            i = false;
          }
          break;
        case 1: {
          const fechaInicial = prompt("Ingrese la fecha de inicio");
          const fechaFinal = prompt("Ingrese la fecha final");
          const nombreHuesped = prompt("Ingrese el nombre del huesped");
          booksReservations(fechaInicial,fechaFinal,nombreHuesped)
        }
      }
    }
  })
  .catch((error) => {
    console.error('Error al manejar la promesa:', error);
});
