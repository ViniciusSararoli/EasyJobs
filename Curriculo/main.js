var deficiencia = document.querySelector
('input[name = deficiencia]');

  deficiencia.onclick = function comDeficiencia() {
   deficiencia = document.getElementById('auditiva').style.display = 'block'; 
}

var painelFormacao = document.querySelector('button#incluir');

painelFormacao.onclick = function() {
  painelFormacao = document.querySelector('div.dadosFormacao').style.display = 'block';
}

var fecharFormacao = document.querySelector('button#cancelar');

fecharFormacao.onclick = function () {
  fecharFormacao = document.getElementById('dadosFormacao').style.display = 'none';
}