

function mostrar(id) {
  if (document.getElementById(id).style.display == 'block'){
    document.getElementById(id).style.display = 'none';
  }else{
    document.getElementById(id).style.display = 'block';
  } 
};


var fecharFormacao = document.querySelector('button#cancelar');

fecharFormacao.onclick = function () {
  fecharFormacao = document.getElementById('dadosFormacao').style.display = 'none';
}

