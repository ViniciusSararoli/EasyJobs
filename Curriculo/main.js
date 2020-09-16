var deficiencia = document.querySelector
('input[name = deficiencia]');

deficiencia.onclick = function comDeficiencia() {
  deficiencia = document.getElementById('defici').style.display = 'block'; 
}
  /*deficiencia.onclick = function comDeficiencia() {
    if (deficiencia.onclick == true) {
      deficiencia = document.getElementById('defici').style.display = 'block';   
    }else{
     deficiencia = document.getElementById('defice').style.display = 'none';  
    };
};comDeficiencia();*/

/********************************************************************************** */
var painelFormacao = document.querySelector('button#incluir');

painelFormacao.onclick = function() {
  painelFormacao = document.querySelector('div.dadosFormacao').style.display = 'block';
}

var fecharFormacao = document.querySelector('button#cancelar');

fecharFormacao.onclick = function () {
  fecharFormacao = document.getElementById('dadosFormacao').style.display = 'none';
}
