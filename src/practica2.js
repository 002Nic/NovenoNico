let num1= parseInt(prompt("Escribe un numero: "));
let num2= parseInt(prompt("Porfavor escribe otro numero: "));
let operaciones = prompt("Escribe cual operacion deseas realizar entre los dos numero que acabaste de escribir: ");
let resultado = 0;
if(operaciones == "suma"){
     resultado = num1 + num2;
}
if(operaciones == "restar"){
    resultado = num1 - num2;
}
    if(operaciones == "multiplicar"){
        resultado = num1 * num2;
    }
        if(operaciones == "dividir"){
            resultado = num1 / num2;
        }
        alert("El resultado de tu operacion es: " + resultado);