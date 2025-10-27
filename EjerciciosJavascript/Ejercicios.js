//Funcion para invertir cadena
function invertir(cadena) {
    let cadenaInvertida = '';

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];

    }

    return cadenaInvertida;
}

//console.log(invertir('Hola Mundo nuevo de js!'));


//verificar si un numero es valido
function NumeroValido(num) {
    return typeof num === 'number' && !isNaN(num);
}

//console.log(NumeroValido(27));

//Funcion de operaciones
function operacion(v1, v2, op) {
    if (NumeroValido(v1) && NumeroValido(v2)) {
        switch (op.toLowerCase()) {
            case 'suma':
                return v1 + v2;
            case 'resta':
                return v1 - v2;
            case 'multiplicacion':
                return v1 * v2;
            case 'division':
                if (v2 == 0) {
                    return "Error"
                }
                return v1 / v2;
            default:
                return "Operacion no valida";

        }
    }
}

//console.log(operacion(9,7,'suma'));

//funcion de que si un numero es PAR

function Par(num) {
    if (NumeroValido(num)) {
        return num % 2 === 0;
    }
    return "No es un numero valido";

}
//console.log(Par(8));

//funcion para determinar si un numero es primo en js
function esPrimo(num) {
    if (NumeroValido(num) && num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;

}
//console.log(esPrimo(20));

//Funcion de numero binario

function getBinario(numero) {

    if (NumeroValido(numero)) {



        if (!Number.isInteger(numero)) {
            return "Error: Solo se admiten números enteros.";
        }

            if (numero === 0) {
                return "0";
            }
                let binario = "";
                let esNegativo = numero < 0;
                numero = Math.abs(numero);

                while (numero > 0) {
                    binario = (numero % 2) + binario;
                    numero = Math.floor(numero / 2);
                }
                    return esNegativo ? "-" + binario : binario;
    }

    return "Ingresa un numero valido :p"

}    
    //console.log(getBinario(10));
    //console.log(getBinario("texto"));


console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
console.log('5' == 5);
console.log('5' === 5);


/**
La direfencia de  == y ===

es que los dos se utilizan para realizar comparaciones solo que == es mas relajada que ===
Con === es mas estricta si son del mismo tipo y tienen el mismo valor da true 
Pero == compara solo los valores de los operandos pero primero realiza una conversion automatica si es necesario para que los dos operandos sean del mismo tipo

 */