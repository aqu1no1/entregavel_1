///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
function Calculadora(num1,num2,operacao){
  let resultado = 0
  num1 = Number(num1)
  num2 = Number(num2)

   if(operacao === "+"){
          resultado = num1 + num2 
          return  resultado;

   } else if (operacao === "-") {
          resultado = num1 - num2 
         return  resultado;

   } else if (operacao === "*") {
          resultado = num1 * num2
          return  resultado;

   } else if (operacao === "/") {
          resultado = num1 / num2
          return  resultado;
    
   } else if (operacao === "e") { 
          resultado = 1;  
          for(let i = 0; i < num2;i++){
              resultado *= num1
          }
          // outro jeito de fazer resultado = num1 ** num2
          return  resultado;

   } else if (resultado === "undefined" || resultado > 1000000) {
          resultado = "ERRO"

   } 

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}