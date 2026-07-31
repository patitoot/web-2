/* PUNTO 1:
let num: number = Number(prompt("ingrese un numero"))

while(num > 7 || num < 1) {
    alert ("entre 1 y 7")
    num = Number(prompt("ingrese un numero del 1 al 7"))
}

switch (num) {
    case 1:
    console.log ("lulnes")
    break;
    case 2: 
    console.log ("mar-te")
    break;
    case 3:
    console.log("miercoles")
    break;
    case 4:
    console.log("juevezzz")
    break;
    case 5:
    console.log("viernes")
    break;
    case 6:
    console.log("sabadown")
    break;
    case 7:
    console.log("domingood")
    break;
}
--------------------------------------------------------------------------------------------

PUNTO 2:
let num1: number = Number(prompt("ingrese un numero"))
let num2: number = Number(prompt("ingrese segundo numero"))
let op: string | null = prompt ("seleccione una opcion:\n 1: -sumar \n 2: -restar \n 3: -multiplicar \n 4: -dividir")
switch (op) {
    case "1":
    console.log ("resultado de la suma", num1 + num2)
    break;
    case "2":
    console.log ("resultado de la resta", num1 - num2)
    break;
    case "3":
    console.log ("resultado de la multiplicacion:", num1 * num2)
    break;
    case "4":
    if (num2 === 0) {
        console.log("no se puede dividir por 0")
    } else {
        console.log ("resultado de la division:", num1 / num2)
    }
    break;
    
    default:
    console.log("operacion no valida. boludazo")
}

PUNTO 4:

let total: number = 0
let cantidad: number = 0

while(true) {
    let precio: number = Number(prompt("ingresa el precio, marsopa"))
    if (isNaN(precio) || precio < 0) {
        alert ("valor invalido wachin")
    continue
    }

    if (precio === 0) {
        break
    }
    total += precio
cantidad++
}
console.log("total producto:", cantidad)
console.log("total a pagar: ", total)*/