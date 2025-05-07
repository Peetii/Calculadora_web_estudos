function calcular(){
    var primeiro_numero = parseFloat(document.getElementById("n1").value) 
    var segundo_numero = parseFloat(document.getElementById("n2").value) 
    var operador = document.getElementById("operador").value

    var resultado

switch (operador) {
    case '+':
        resultado = (primeiro_numero + segundo_numero)
        break;
    case '-':
        resultado = (primeiro_numero - segundo_numero)
        break;
    case '*':
        resultado = (primeiro_numero * segundo_numero)
        break;
    case '/':
        if (segundo_numero === 0){
            resultado = "Erro: Não é possivel dividir por 0."
            return;
        }else{
             resultado = (primeiro_numero / segundo_numero)
             break;
        }
        
    default:
        resultado = "Operador Invalido."
        break;

}
if (resultado !== "Erro na conta por 0") {
    document.getElementById("resultado").textContent = format(resultado);
  } else {
    document.getElementById("resultado").textContent = resultado;
  }
}

const format = (resultado) => Number.isInteger(resultado) ? resultado : resultado.toFixed(2);