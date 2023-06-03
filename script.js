function trocar(cor, corfonte){
    document.getElementById("corpo").style.backgroundColor = cor
    document.getElementById("corpo").style.color = corfonte
    document.getElementById("darkmode").classList.toggle("desligado")
    document.getElementById("darkmode2").classList.toggle("desligado")
}

function validar() {
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value
  
    if (nome == "" || telefone == "" || email == "") {
        alert('Preencha todos os campos')
    } else {
        alert('Agradecemos o seu contato!')
      }
    }

var dataHoraElemento = document.getElementById('data-hora');
function atualizarDataHora() {
  var dataHoraAtual = new Date();
  var dataHoraFormatada = dataHoraAtual.toLocaleString(); // Pode-se personalizar o formato passando opções como parâmetro
  dataHoraElemento.innerHTML = dataHoraFormatada;
}
atualizarDataHora();
setInterval(atualizarDataHora, 1000);
