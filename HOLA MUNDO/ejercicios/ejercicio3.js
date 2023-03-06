'use strict'


var numero1 = parseInt(prompt("Ingrese el numero 1", 0)); 
var numero2 = parseInt(prompt("Ingrese el numero 2", 0)); 
document.write("<h1>De " + numero1+ " a "+ numero2 + " estan estos numeros: </h1>")
for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
}