num1= parseInt(prompt("Escribe un numero: "));
num2= parseInt(prompt("Porfavor escribe otro numero: "));
operaciones = prompt("Escribe cual operacion deseas realizar entre los dos numero que acabaste de escribir: ");
let resultado = 0;
if(operaciones == "suma"){
    let resultado = num1 + num2;
}
if(operaciones == "restar"){
    let resultado = num1 - num2;
    if(operaciones == "multiplicar"){
        let resultado = num1 * num2;
        if(operaciones == "dividir"){
            let resultado = num1 / num2;     