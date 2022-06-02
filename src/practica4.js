let fecha = Date.now();
let fecha1 = new Date(fecha);
let numdia = fecha1.getDay();
let dia = "";

//segun el dia, escribir el numero ordinal//

switch (numdia){
    case 1:console.log("domingo")
    break;
    case 2:console.log("lunes")
    break;
    case 3:console.log("martes")
    break;
    case 4:console.log("miercoles")
    break;
    case 5:console.log("jueves")
    break;
    case 6:console.log("viernes")
    break;
    case 7:console.log("sabado")
    break;
    default:console.log("Ese dia no corresponde")
}
console.log(dia)