// "x" e "y" son números enteros .
// Devuelve el número más grande
// Si son iguales, devuelve cualquiera de los dos
// Tu código:

const obtenerMayor = (x, y) => {
    //     if (x > y) {
    //         console.log(`${x} es mayor`)
    //     } else if (y > x) {
    //         console.log(`${y} es mayor`)
    //     } else {
    //         console.log("Son iguales")
    //     }
    console.log(Math.max(x, y))
    console.log(x > y ? x : y) //if ternario


}
obtenerMayor(3, 3)


//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"

const mayoriaDeEdad = edad => {
    // if (edad >= 18) {
    //     console.log("Allowed")
    // } else {
    //     console.log("Not allowed")
    // }
    //if ternaro
    //planteo si es true y : cuando es false
    edad >= 18 ? console.log("Allowed") : console.log("Not allowed")
}

mayoriaDeEdad(25)

//Recibimos un estado de conexión de un usuario representado por un valor numérico. 
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.
const conection = status => {
    // switch (status) {
    //     case 1:
    //         console.log("Online")
    //         break;
    //     case 2:
    //         console.log("Away")
    //         break;
    //     default:
    //         console.log("Offline")
    //         break;
    // }
    //if ternario -> Se puede poner adentro del console.log
    console.log(status == 1 ? "Online" : status == 2 ? "Away" : "Offline")
}
conection(2)

// Devuelve un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!"
// Si "idioma" es "mandarin", devuelve "Ni Hao!"
// Si "idioma" es "ingles", devuelve "Hello!"
// Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
// Tu código:

const saludo = idioma => {
    // switch (idioma.toLowerCase()) {
    //     case "aleman":
    //         console.log("Guten Tag!")
    //         break
    //     case "mandarin":
    //         console.log("Ni Hao!")
    //         break
    //     case "ingles":
    //         console.log("Hello!")
    //         break
    //     default:
    //         console.log("Hola!")
    //         break

    // }
    //if ternario
    console.log(idioma.toLowerCase() == "aleman" ? "Guten Tag!" : idioma.toLowerCase() == "mandarin" ? "Ni Hao!" : idioma.toLowerCase() == "ingles" ? "Hello!" : "Hola!")

}
saludo("INGLES")

//La función recibe un color. Devolver el string correspondiente:
//En caso que el color recibido sea "blue", devuelve --> "This is blue"
//En caso que el color recibido sea "red", devuelve --> "This is red"
//En caso que el color recibido sea "green", devuelve --> "This is green"
//En caso que el color recibido sea "orange", devuelve --> "This is orange"
//Caso default: devuelve --> "Color not found"
//Usar el statement Switch.
const colors = color => {
    switch (color.toLowerCase()) {
        case "blue":
            console.log(`This is ${color}`)
            break
        case "red":
            console.log(`This is ${color}`)
            break
        case "green":
            console.log(`This is ${color}`)
            break
        case "orange":
            console.log(`This is ${color}`)
            break
        default:
            console.log("Color not found")
            break
    }
}

colors("blue")

// Devuelve "true" si "numero" es 10 o 5
// De lo contrario, devuelve "false"
// Tu código:
const esDiezOCinco = numero => {
    console.log(numero === 5 || numero === 10)
}

esDiezOCinco(5)

// Devuelve "true" si "numero" es menor que 50 y mayor que 20
// De lo contrario, devuelve "false"
// Tu código:

const estaEnRango = numero => {
    console.log(numero > 20 && numero < 50)

}
estaEnRango(30)

// Devuelve "true" si "numero" es un entero (int/integer)
// Ejemplo: 0.8 -> false
// Ejemplo: 1 -> true
// Ejemplo: -10 -> true
// De lo contrario, devuelve "false"
// Pista: Puedes resolver esto usando `Math.floor`
// Tu código:
const esEntero = numero => { console.log(numero - Math.floor(numero) === 0) }
esEntero(-10)

// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero
const fizzBuzz = numero => {
    // if (numero % 3 === 0 && numero % 5 === 0) {
    //     console.log("fizzbuzz")
    // } else if (numero % 5 === 0) {
    //     console.log("buzz")
    // } else if (numero % 3 === 0) {
    //     console.log("fizz")
    // } else {
    //     console.log(numero)
    // }
    let retorno = ""
    if (numero % 3 === 0) retorno += "fizz";
    if (numero % 5 === 0) retorno += "buzz"
    console.log(retorno || numero)
}
fizzBuzz(15)

//La función recibe tres números distintos. 
const operadoresLogicos = (num1, num2, num3) => {
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    if (num1 > num2 && num1 > num3 && num1 > 0) {
        console.log("Número 1 es mayor y positivo")
            //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    } else if (num1 < 0 || num2 < 0 || num3 < 0) {
        console.log("Hay negativos")
            //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    } else if (num3 > num1 && num3 > num2) {
        num3 += 1
        console.log(num3)
            //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    } else if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log("Error")
            //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    } else {
        console.log("false")
    }
}

operadoresLogicos(10, 15, -2)


// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primos
const esPrimo = numero => {
    // cont = 0
    // for (let i = 1; i <= numero; i++) {
    //     if (numero % i == 0) {
    //         cont += 1
    //         //console.log(cont)
    //     }
    // }
    // if (cont === 2) {
    //     console.log("true")
    // } else {
    //     console.log("false")
    // }
    if (numero == 0 || numero == 1) {
        console.log(false)
        return
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            console.log(false)
            return
        }
    }
    console.log(true)
}
esPrimo(7)

//Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
//si su valor es true y “Soy falso” si su valor es false.
//Escribe tu código aquí
const esVerdadero = valor => {
    //     if (valor === true) {
    //         console.log("Soy verdadero")
    //     } else {
    //         console.log("Soy falso")
    //     }
    //if ternario
    valor ? console.log("Soy verdadero") : console.log("Soy falso")
}

esVerdadero(true)

//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//Escribe tu código aquí  
// function tablaDelSeis() {
//      for(let i=0; i<=10;i++){
//         result = 6*i
//         console.log(result)
//      }

// }

function tablaDelSeis() {
    let arrayTablaDelSeis = [];
    for (let i = 0; i <= 10; i++) {
        arrayTablaDelSeis.push(6 * i);
    }
    return arrayTablaDelSeis;
}
console.log(tablaDelSeis())

//Leer un número entero y determinar si tiene 3 dígitos.
//Escribe tu código aquí

const tieneTresDigitos = numero => {
    // if (numero >= 100 && numero <= 999) {
    //     console.log("Tiene tres cifras")
    // } else {
    //     console.log("No tiene tres cifras")
    // }
    console.log(numero >= 100 && numero <= 999)
        //console.log(String(numero).length==3) 
}
tieneTresDigitos(100)
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.

const doWhile = numero => {
    cont = 0
    do {
        cont++
        numero += 5
        console.log(numero)

    } while (cont < 8)
    return numero

}
console.log(doWhile(2))