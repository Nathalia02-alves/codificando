
var alfabeto = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
         
var passos = +document.getElementById("passos").innerHTML;

function voltar() {
    if(passos > 1) {
        passos--;
        document.getElementById("passos").innerHTML = passos;
    }
}

function avancar() {
    if(passos < 25) {
        passos++;
        document.getElementById("passos").innerHTML = passos;
    }
}

function calcular() {
    var input = document.getElementById("entradaDeTexto").value.toUpperCase();
    var resultado = "";

    for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input

        var posicao = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
        var deslocamento = (posicao + passos) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
        deslocamento = deslocamento == 0 ? 26 : deslocamento; //MOD retornar 0 caso o resultadoado seja 26, tem que tratar isso
        resultado += alfabeto[deslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
    }

    document.getElementById("saida").innerHTML = resultado;
  }
$(document).ready(function() {
    $('#base-64').hide();
    $('#select').change(function() {
      if ($('#select').val() == 'base64' ) {
        $('#base-64').show();
      } else {
        $('#base-64').hide();
      }
    });
  });
  
  
  $(document).ready(function() {
    $('#cifraDeCesar').hide();
    $('#select').change(function() {
      if ($('#select').val() == 'cifra' ) {
        $('#cifraDeCesar').show();
      } else {
        $('#cifraDeCesar').hide();
      }
    });
  });

 var tipoCodigo = document.getElementById('base64');
 var radio = document.getElementById('radio');

 if(radio[0].checked && tipoCodigo == "base64"){
    var valTexto = entradaDeTexto.value
    saidaDeTexto.value = btoa(valTexto)

}else if(radio[1].checked && tipoCodigo == "base64"){
    var valTexto = entradaDeTexto.value
    saidadaDeTexto.value = atob(valTexto)
}