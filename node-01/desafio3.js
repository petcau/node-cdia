let lerValor = require("readline-sync")

let num1 = Number(lerValor.question("Num1: "))

let op = lerValor.question("Operador: ")

let num2 = Number(lerValor.question("Num2: "))

let resultado;

switch (op){
    case "+":
        resultado = num1+num2;
        break;
    case "-":
        resultado = num1-num2;
        break;
    case "*":
        resultado = num1*num2;
        break;
    case "/":
        resultado = num1/num2;
        break
    default:
        console.log("Operador incorreto!");
        break;
}

console.log(resultado);
