function Converter() {
    //puxando a função ConverterDolar() do HTML usando function
    var valorElemento = document.getElementById("valor"); //criando uma variavel para salvar os dados recebidos pela id "valor" no HTML usando o .getElementById()
    var valor = valorElemento.value; //criando uma variavel para que se possa ler o valor digitado com a função .value
    var valorEmDolarNumerico = parseFloat(valor); //convertendo o valor digitado de script para numerico usando a função .parseFloat
  
    var valorEmReal = valorEmDolarNumerico * 5.02; //realizando a formula para converter o real em dolar
  
    var elementoValorConvertido = document.getElementById("valorConvertido"); //d criando variavel para armazenar o resultado da conversão
    var valorConvertido = "O valor em real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido; //variavel para imprimir o resultado no HTML
  }