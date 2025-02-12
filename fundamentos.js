//1. Exibir "Olá, Mundo!" no console.
console.log("olá, mundo!");


//2. Declarar variáveis (`let`, `const`, `var`) e exibir seus valores. 
//pode trocar de valor
 let idade;
 idade = 20

 //Não pode mais trocar de valor
 const nome = "Julia";

 var altura; // Não é mais usado
 altura = 1.70;

 
 console.log(idade, altura, nome)

 //3. Criar uma função que soma dois números.
 function somar(a, b) {
    return a + b;
  }
  
  console.log(somar(3, 5))

//4. Criar uma função que verifica se um número é par ou ímpar. 
function parOuImpar(num) {
    if (num % 2 === 0){
        return "é par!";
    } else {
        return "é impar!"
    }
}


  console.log(parOuImpar(4));
  console.log(parOuImpar(7));

  //5. Criar uma função que retorna o maior entre dois números. 
  function maiorNumero(a, b){
    if (a > b) {
        return a;
    } else {
        return b;
    }
  }

  console.log(maiorNumero(10, 100));
  console.log(maiorNumero(80, 20));

  //6. Criar uma função que recebe um nome e retorna "Olá, [nome]!".
  function saudacao(juju) {
    return "Olá" + juju + "!";
  }
  
  console.log(saudacao("juju"));

  //7. Criar uma função que calcula o quadrado de um número. 
  function calcularQuadrado(numero) {
    return numero * numero;
  }

  console.log(calcularQuadrado(9)); 
  
  //8. Criar uma função que retorna a média de três números. 
  function aMédia (a, b, c) {
    return a, b, c /3
  }

  console.log(aMédia(100, 200, 300));

  //9.Criar uma função que converte graus Celsius para Fahrenheit.
  //(0 °C × 9/5) + 32 = 32 °F  
  function celsiusParaFahrenheit(celsius) {
    const fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  console.log(celsiusParaFahrenheit(25));

  //10. Criar um loop `for` que exibe números de 1 a 10.  
 for (let i = 1; i <= 10; i++ ) {
    console.log(i);
}

//11. Criar um loop `while` que exibe números de 1 a 10. 
let i = 1;

while (i <= 10) {
  console.log(i);
  i++; 
}

//12. Criar uma função que recebe um array de números e retorna a soma de seus elementos. 
const Lista2 = [1,2,3,4,5,6,7,8,9,100];

let somaDeTudo =Lista2.reduce((acumulador, num) => acumulador + num);
console.log(somaDeTudo)

