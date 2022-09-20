//funcion
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad
/* function esMayor (nombre, edad){
if (edad>=18){
    document.write (`${nombre} sos mayor tenes ${edad} años, podes manejar`)
}else {
    document.write ("NO podes Manejar")
}
}*/

// esMayor(prompt("decime tu nombre"), prompt("decime tu edad"), )

// function esMayor(nombre, edad) {
//     if (edad >= 18 && edad <= 94) {
//         document.write(`${nombre} sos mayor tenes ${edad} años, podes manejar`)
//     } else {
//         document.write("NO podes Manejar")
//     }
// }

// esMayor(prompt("decime tu nombre"), prompt("decime tu edad"), )

// // pasar a funcion flecha


// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Luz";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 123;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    document.write(`Hola ${str}`)

}
//document.write(devolverString(nuevaString))

function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    return x + y

}
//document.write(suma(2, 3))

function resta(x, y) {
    // Resta "x" de "y" y devuelve el valor
    // Tu código:
    return x - y

}
//document.write(resta(8, 2))

function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    return x * y

}
//document.write(multiplica(7, 2))

function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    return x / y

}
//document.write(divide(8, 2))

function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:utilizar if y else
    if (x === y) {
        return true
    } else {
        return false
    }


}
// document.write(sonIguales(2, 2))

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    let a = str1.lenght
    let b = str2.lenght
    if (a == b) {
        return true
    } else {
        return false
    }

}

//document.write(tienenMismaLongitud("Maria", "Luz"))

function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num < 90) {
        return true
    } else {
        return false
    }

}
//document.write(menosQueNoventa(100))

function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num > 50) {
        return true
    } else {
        return false
    }

}
//document.write(mayorQueCincuenta(10))

function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    return x % y

}
//document.write(obtenerResto(9, 5))

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }


}
//document.write(esPar(15))

function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num % 2 != 0) {
        return true
    } else {
        return false
    }

}
//document.write(esImpar(150))

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    return Math.pow(num, 2)

}
//document.write(elevarAlCuadrado(3))

function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    return Math.pow(num, 3)

}
//document.write(elevarAlCubo(3))

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return Math.pow(num, exponent)

}
//document.write(elevar(2, 4))

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    return Math.round(num)

}
//document.write(redondearNumero(7.4))

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    return Math.ceil(num)

}
// document.write(redondearHaciaArriba(8.1))


function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    num = Math.random()

    return num

}
//document.write(numeroRandom())

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if (numero > 0) {
        let result = document.write("Es positivo")
    } else if (numero < 0) {
        let result = document.write("Es negativo")
    } else {
        return false
    }
    return result

}
//document.write(esPositivo(0)) //Es positivoundefined

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    let frase = str + "!"
    return frase


}
//document.write(agregarSimboloExclamacion("Hola mundo"))

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
    // Tu código:
    let nomyApe = `${nombre} ${apellido}`
    return nomyApe


}
//document.write(combinarNombres("Maria", "Luz"))

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    let saludo = "Hola " + nombre
    return saludo

}
//document.write(obtenerSaludo("Luz"))

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un cuadrado teniendo su altura y ancho
    // Tu código:
    return alto * ancho

}
//document.write(obtenerAreaRectangulo(2, 3))

function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    return 4 * lado

}
//document.write(retornarPerimetro(2))

function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    area = (base * altura) / 2
    return area


}
//document.write(areaDelTriangulo(2, 3))


function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. 
    //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    cambio = euro * 1.20

    document.write(`Su cambio es US$ ${cambio}`)

}
//deEuroAdolar(prompt("Cuanto euros desea cambiar?"))



function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
    //Escribe tu código aquí
    if (letra.lenght > 2) {
        document.write("Dato incorrecto")
    } else {
        if (letra === 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
            document.write("Es vocal")

        } else {
            document.write("Dato incorrecto")
        }
    }

}

//esVocal(prompt("Ingrese una letra"))