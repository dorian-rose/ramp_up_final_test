// Solicita al usuario que elija entre la opción 1 o 2:
// Opción 1: Se le debe pedir dos números al usuario e indicar si son impares y múltiplos de 25 ambos, uno de ellos o ninguno.
// Opción 2: Se le debe pedir una palabra y comprobar si empieza o termina por s/S

function dosOpciones() {
  let option = prompt("Elija entre la opción 1 o 2 (teclea '1' o '2')");
  if (option == 1) {
    primeraOpcion();
  } else {
    if (option == 2) {
      segundaOpcion();
    } else {
      prompt("elige una opcion valida");
    }
  }
}
//opcion 1 (creo que leí mal el enunciado, aqui tengo para los dos numeros: si es impar, multiple de 25 or ambos. He intentado otra vez abajo)

/*function primeraOpcion() {
  let number1 = parseInt(prompt("Inserte un numero entero "));
  let number2 = parseInt(prompt("Inserte otro numero entero "));
  let number1Status = "";
  let number2Status = "";
  //calculate number1
  if (number1 % 2 == 1 && number1 % 25 == 0) {
    number1Status = "impar y multiple de 25";
  } else {
    if (number1 % 25 == 0) {
      number1Status = number1Status + "multiple de 25 pero no impar";
    } else {
      if (number1 % 2 == 1) {
        number1Status = number1Status + "impar pero no multiple de 15";
      } else {
        number1Status = number1Status + "ni impar ni multiple de 25";
      }
    }
  }

  //calculate number2
  if (number2 % 2 == 1 && number2 % 25 == 0) {
    number2Status = "impar y multiple de 25";
  } else {
    if (number2 % 25 == 0) {
      number2Status = number2Status + "multiple de 25 per no par";
    } else {
      if (number2 % 2 == 1) {
        number2Status = number2Status + "impar pero no multple de 25";
      } else {
        number2Status = number2Status + "ni impar ni multiple de 25";
      }
    }
  }
  alert(
    `El primer numero que entraste es ${number1Status} y el segundo es ${number2Status}`
  );
}*/

//opcion 1 (esta vez solo muestro si NINGUNO de los numeros, UNO o AMBOS cumplen LAS DOS condiciones)
function primeraOpcion() {
  let number1 = parseInt(prompt("Inserta un numero"));
  let number2 = parseInt(prompt("Inserta otro numero"));
  let numbers = [number1, number2];
  let countNumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1 && numbers[i] % 25 == 0) {
      countNumber++;
    }
  }
  if (countNumber == 0) {
    alert("Ninguno de los numeros es impar Y multiple de 25");
  } else {
    if (countNumber == 1) {
      alert("Solo UNO de los numeros es impar Y multiple de 25");
    } else {
      if (countNumber == 2) {
        alert("AMBOS de los numeros son impares Y multiples de 25");
      }
    }
  }
}

//opcion 2 (creo que hay opcion mas eficiente, quizas loop, con mas tiempo lo buscaria)
function segundaOpcion() {
  let palabra = prompt("Inserte una palabra").toLowerCase();

  let long = palabra.length - 1;
  if (palabra[0] == "s" && palabra[long] == "s") {
    alert(`Tu palabra, ${palabra}, empieza y termina con "s"`);
  } else {
    if (palabra[0] == "s") {
      alert(`Tu palabra, ${palabra}, empieza con "s"`);
    } else {
      if (palabra[long] == "s") {
        alert(`Tu palabra, ${palabra}, termina con "s"`);
      } else {
        alert(`Tu palabra, ${palabra}, no empieza ni termina "s"`);
      }
    }
  }
}
