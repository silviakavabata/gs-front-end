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

var imagens=[
  'Imagens/slide-1.jpg',
  'Imagens/slide-2.jpg',
  'Imagens/slide-3.jpg',
];
let Index=0;
let time =2500;

function slideShow(){
  document.getElementById('slide-home').src=imagens[Index];
  Index++;
  if(Index==imagens.length){Index=0}
  setTimeout("slideShow()",time);
}
slideShow()

function validar_login() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if (usuario === "" || senha === "") {
    alert('Por favor, preencha todos os campos.');
  } else if (usuario === "admin" && senha === "123456") {
    window.location.href = 'https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021';
  } else if (usuario === "escola" && senha === "123456") {
    window.location.href = './login-escola.html';
  } else if (usuario === "morador" && senha === "123456") {
    window.location.href = './login-morador.html';
  } else {
    alert('Usuário ou senha incorretos.');
  }
}