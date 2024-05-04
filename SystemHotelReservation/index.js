const reservations = [];
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
    showMenu(rooms,roomTypes)
  })
  .catch((error) => {
    console.error('Error al manejar la promesa:', error);
  });

//AQUI EMPIEZA EL PROGRAMA
// FUNCION PARA FILTRAR HABITACIONES SEGUN CANTIDAD DE PERSONAS
function availabilityVerification(rooms, roomTypes) {
  const askPeople = Number(prompt("Ingrese el numero de personas que se alojaran"));
  if (askPeople < 1 || askPeople > 6) {
    alert("NO se encuentran habitaciones Disponibles para esa CANTIDAD de personas");
    return;
  }
  else if (isNaN(askPeople)){
    alert("EL valor ingresado no es un numero, intenta de nuevo")
    return;
  }
  // Filtrando las habitaciones que tengan una capacidad mayor oh igual ah la que me ingreso el usuario
  const filterAcorddingTypesRooms = roomTypes.filter((e) => e.capacity >= askPeople);
  // Filtrar las habitacioenes que coincidan con el TIPO de habitacion y la HABITACION
  // Cuando no se le pasa condiciones al operador logico &&, por defecto toma como valor True
  //Verificar si al menos un elemento del arreglo rooms coincide con la funcion especificada
  const filterRooms = filterAcorddingTypesRooms.filter(roomType =>
    rooms.some(room => room.roomTypeId === roomType.id && room.availability)
  );
  return filterRooms
}

// FUNCION PARA VALIDAR FECHAS
function functionDate(userDate) {
  //D4 = verifica si hay coincidencias entre 4 digitos, del 0 al 9
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  // metodo test, se utiliza para verificar si una cadena coincide dentro de otra
  return datePattern.test(userDate)
}

function generatorId() {
  let id = 1;
  return function () {
    return id++;
  };
}
// Funcion para ver las reservas
function VerReservas(){
  const userInputName = prompt("Ingrese el nombre bajo el cual se hizo la reserva").toLowerCase()
  let message = null
  for (i = 0; i < reservations.length; i++){
    const guestNameStore  = reservations[i].name;
    if (guestNameStore === userInputName){
      message = reservations[i];
      break;
    }
  }
  if (message){
      alert(`Detalles sobre la reserva
            \nFecha de Inicio: ${message.fechaInicio}
            \nFecha final ${message.fechaFinal}
            \nBajo el nombre de ${message.name}`)}
  else {
    alert("No hay reservas disponibles con ese nombre")
  }
  return message
}

// Funcion para cancelar las reservas
function cancelBookings (){
  reservations.forEach(e => {
  alert(`Las reservas actuales son\nNombre: ${e.name}\nFecha Inicio: ${e.fechaInicio}\nFecha Final ${e.fechaFinal}`)
  });
  const askToId = Number(prompt("Ingrese el id de se reserva"));
  if (isNaN(askToId)){
    console.log("El valor ingresado no es un numero")
    return;
  }
  for (i = 0; i < reservations.length; i++){
    const storeId = reservations[i].id;
    if (storeId === askToId){
      let askByCancelToBooking = confirm(`Estas seguro que deseas cancelar tu reserva`);
      if (askByCancelToBooking){
        // Indice, CANTIDAD de elementos
        reservations.splice(i, 1)
        alert("Tu reserva ah sido cancelada exitosamente!")
        break;
      }else {
        alert("Tu reserva no ah sido cancelada")
      }
    }
  }
}

// FUNCION PARA EDITAR LAS RESERVAS
function editaReservas(){
  reservations.forEach(e => {
    alert(`Las reservas actuales son:
    \nNombre: ${e.name}
    \nFecha Inicio: ${e.fechaInicio}
    \nFecha Final ${e.fechaFinal}\n`)
  });
  const userInputBookingToEdit =  Number(prompt("Ingrese el id de la reserva que desea editar"));
  let numId = null
  for (i = 0; i < reservations.length; i++){
    const arrayId = reservations[i].id;
    if (arrayId === userInputBookingToEdit){
      numId = reservations[i];
      break;
    }
  }
  if (numId){
    const newDate = prompt(`La fecha actual de la reserva es ${numId.fechaInicio}\nIngrese la nueva fecha para actualizar`);
    if (functionDate(newDate)){
      console.log("Valido")
    }
    else {
      console.log("Ingrese una fecha valida");
      return;
    }
    const newDateEndDate = prompt(`La Fecha Final actual es ${numId.fechaFinal}\nIngrese la nueva Fecha Final`);
    if (functionDate(newDateEndDate)) {
      console.log("Valido")
    }
    else {
      console.log("Ingrese una fecha valida");
      return;
    }
    Object.assign(numId,{
      dateStart: newDate,
      dateEnd: newDateEndDate 
    });
  }
  else {
    alert("El id es incorrecto, intenta de nuevo")
  }
}
const userId = generatorId();
function showMenu(rooms,roomTypes) {
  let i = true;
  while (i) {
      const option = Number(
        prompt(`Bienvenido al Hotel Bahamas
          \nIngrese una opcion
          \n1: Reservar habitacion
          \n2: Ver reservas Actuales
          \n3: Cancelar Reserva
          \n4: Editar reservas
          \n5: Salir`)
      );
      switch (option) {
        case 5:
          i = false;
          break;
        case 1:
          let userRoom = 'Porfavor eliga una habitacion por nombre\n\n'
          const showRooms = availabilityVerification(rooms, roomTypes);
          // Las habitacioenes que me esta filtrando "el" estan haciendo referencia al array de objetos 
          // que se creo con el metodo filter
          showRooms.forEach((el) => {
          userRoom += `Las habitaciones disponibles son: ${el.name}
          Descripcion: ${el.description}
          La capacidad es para ${el.capacity} personas\n\n.`.toLowerCase()
          })
          prompt(userRoom)
          if (!isNaN(userRoom)){
            console.log("El Dato ingresado es un numero, intenta de nuevo");
            return;
          }
          const dateStart = prompt("Ingrese la fecha de inicio de la reserva formato YYYY-MM-DD")
          if (functionDate(dateStart)) {
            console.log("Fecha valida")
          }
          else {
            console.log("Ingrese una fecha valida")
            return;
          }
          const dateEnd = prompt("Ingrese la fecha de fin de la reserva formato YYYY-MM-DD");
          if (functionDate(dateEnd)) {
            console.log("Fecha valida");
          }
          else {
            console.log("Ingrese una fecha valida");
            return;
          }
          const guestName = prompt("Ingrese su nombre completo").toLowerCase();
          const identity = userId();
          const roomsObject = {
            id: identity,
            habitacion: userRoom,
            fechaInicio: dateStart,
            fechaFinal: dateEnd,
            name: guestName
          }
          reservations.push(roomsObject);
          reservations.forEach((e) => {
            alert(`
                  \nEl id de su reserva es ${e.id}
                  \nLa fecha inicio es ${e.fechaInicio}
                  \nLa fecha final es ${e.fechaFinal}
                  \nBajo el nombre de ${e.name}\n\nRESERVA EXITOSA`)
          })
          //LA PROMESA SOLO SE ESTA EJECUTANDO CUANDO SE SALE DEL PROGRAMA
          // SE EJECUTA LA PROMESA LUEGO DE QUE EL USUARIO HAYA INGRESADO LOS DATOS
          function showUserInformationAboutBook() {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                reservations.forEach((e, index, array) => {
                  alert(`La fecha inicio es ${e.fechaInicio}
                  \nLa fecha final es ${e.fechaFinal}
                  \nBajo el nombre de ${e.name}`)
                  if (index === array.length - 1) {
                    resolve(reservations);
                  }
                })
              }, 3000);
            })
          }
          showUserInformationAboutBook()
            .then((showInformation) => {
              console.log(showInformation)
            })
            .catch((error) => {
              console.error("Ocurrio un error", error)
            });
          break;
        case 2:
          VerReservas()
          break;
        case 3:
        cancelBookings();
          break;
        case 4:
        editaReservas();
          break;
        default:
          console.log("Ingresa una opcion Valida...");
    }
  }
}