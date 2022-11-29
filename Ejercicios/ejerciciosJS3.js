// No cambies los nombres de las funciones.
const animales = ["Perro", "Gato", "Yaguarete", "Yacare", "Surubi", "Carpincho"];
//      0      1      2           3        4         5         6
const numeros = [1, 2, 8, 7, 4, 6, 7, 3];
// 0  1 2 3 4 5 6 7

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    console.log(array[0])
}
devolverPrimerElemento(animales)

function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    console.log(array[array.length - 1])
}
devolverUltimoElemento(animales)

function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    console.log(array.length)
}
obtenerLargoDelArray(animales)
const array2 = [1, 2, 3, 4, 5]

function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    const nuevoArray = array.map(elemento1 => elemento1 + 1)
    return nuevoArray
}
console.log(incrementarPorUno(array2))

function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    console.log(array.push(elemento))
}
agregarItemAlFinalDelArray(animales, "Delfin")
console.log(animales)

function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento)
}

agregarItemAlComienzoDelArray(animales, "Abeja")
console.log(animales)

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
}


function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    console.log(array.includes(elemento))

}
arrayContiene(animales, "Perro")

function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:


}


const num = [10, 20]

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let cont = 0
    for (let i = 0; i < resultadosTest.length; i++) {
        cont += resultadosTest[i]
    }
    console.log(cont / resultadosTest.length)
}
promedioResultadosTest(num)


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    console.log(Math.max(...numeros))
}
numeroMasGrande(numeros)

function multiplicarArgumentos(num1, num2, num3) {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
       // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    //console.log(arguments[2])
    if (arguments.length < 1) {
        return 0
    }
    let total = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i]
    }
    return total
}
console.log(multiplicarArgumentos(0))

function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquífot
    let j = 0
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 18) {
            j++
        }
    }
    console.log(j)

}

cuentoElementos(num)

const diaDeLaSemana = (numeroDeDia) => {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    if (numeroDeDia === 1 || numeroDeDia === 7) {
        return "Es fin de semana"
    } else {
        return "Es dia laborar"
    }

}
console.log(diaDeLaSemana(3))

const empiezaConNueve = n => {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    n = n.toString()
    return n.charAt(0) == 9


}
console.log(empiezaConNueve(902))

const iguales = [1, 1, 1, 1, 1]
const todosIguales = arreglo => {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí 
    let contador = arreglo[0]
    for (i = 0; i < arreglo.length; i++) {
        if (contador != arreglo[i])
            return false
    }
    return true
}
console.log(todosIguales(iguales))


const meses = ["Enero", "Noviembre", "Diciembre", "Abril", "Marzo"]
const mesesDelAño = array => {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre") {
            nuevoArray.push(array[i]);
        }
    }
    if (nuevoArray.length < 2) {
        return "No se encontraron los meses pedidos"
    } else {
        return nuevoArray
    }
}

console.log(mesesDelAño(meses))
    // mesesDelAño(meses)
console.log(meses)

const num_array = [0, 150, 10, 200, 99, 100, 170, 25, 180, 40]

const mayorACien = array => {
        //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
        //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
        // Tu código:
        let nuevoArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 100) {
                nuevoArray.push(array[i]);
            }

        }
        console.log(nuevoArray)
    }
    // console.log(mayorACien(num_array))
mayorACien(num_array)

function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    let nuevoArray = [];
    for (let i = 0; i < 10; i++) {
        console.log(i)
        numero += 2
        nuevoArray.push(numero)
        if (numero === i) {
            console.log("Se interrumpió la ejecución")
            break
        }

    }
    console.log(nuevoArray)
}
breakStatement(-3)

function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let nuevoArray = [];
    for (let i = 0; i < 10; i++) {
        numero += 2
        if (i === 5) {
            continue;
        }
        nuevoArray.push(numero)
    }
    return nuevoArray
}
console.log(continueStatement(1))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    continueStatement
};