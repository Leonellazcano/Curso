'use strict'

    var numero1= parseInt(prompt("Ingrese el primer numero",0));
    var numero2= parseInt(prompt("Ingrese el segundo numero",0));


  while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ){
        numero1= parseInt(prompt("Ingrese el primer numero",0));
        numero2= parseInt(prompt("Ingrese el segundo numero",0));
    } 
    


console.log(numero1, numero2);

if(numero1 == numero2) {
    alert("LOS NUMEROS SON IGUALES");
}
else if(numero1 > numero2) { 
    alert("EL NUMERO MAYOR ES: " + numero1);
    alert("EL NUMERO MENOR ES: " + numero2);
}
else if(numero2 > numero1) { 
    alert("EL NUMERO MAYOR ES: " + numero2);
    alert("EL NUMERO MENOR ES: " + numero1);
}