let dataInicio = new Date('2019-05-14T00:11:30');
let indiceAtual = 0;

function iniciar() {
  const botao = document.getElementById("botaoIniciar");

  // Aplica classe que transforma o botão em coração
  botao.classList.add("virando-coracao");

  // Aguarda 1 segundo e inicia o site
  setTimeout(() => {
    document.querySelector('.inicio').style.display = 'none';
    document.getElementById('conteudoPrincipal').style.display = 'flex';
    atualizarContador();
    setInterval(atualizarContador, 1000);
    iniciarCarrossel();
    escreverTexto("Desde 14 de maio de 2019, tudo mudou... 💖", "mensagemDigitada");
  }, 1000);
}


function iniciar() {
  document.querySelector('.inicio').style.display = 'none';
  document.getElementById('conteudoPrincipal').style.display = 'flex';
  atualizarContador();
  setInterval(atualizarContador, 1000);
  iniciarCarrossel();
  escreverTexto("Desde o primeiro olhar, eu soube que era você. A mulher mais linda que meus olhos já viram, a paz que meu coração sempre procurou. O tempo passou, mas meu amor só cresceu. São anos ao seu lado e ainda me pego apaixonado como no primeiro dia. Você é o amor da minha vida, minha melhor escolha, meu tudo. Se eu tivesse que te escolher mil vezes, te escolheria mil vezes mais sem pensar, sem duvidar, só amar. Eu te amo mais do que palavras podem dizer, e vou te amar até pra sempre.  💖", "mensagemDigitada");
}

function atualizarContador() {
  let agora = new Date();
  let diferenca = agora - dataInicio;

  let anos = agora.getFullYear() - dataInicio.getFullYear();
  let meses = agora.getMonth() - dataInicio.getMonth();
  let dias = agora.getDate() - dataInicio.getDate();

  if (dias < 0) {
    meses--;
    dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();

  document.getElementById("contador").textContent =
    `${anos} anos, ${meses} meses, ${dias} dias\n` +
    `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

function iniciarCarrossel() {
  const slides = document.querySelectorAll(".slide");
  slides[indiceAtual].style.display = "block";
  setInterval(() => {
    slides[indiceAtual].style.display = "none";
    indiceAtual = (indiceAtual + 1) % slides.length;
    slides[indiceAtual].style.display = "block";
  }, 3000);
}

function escreverTexto(texto, elementoId, velocidade = 60) {
  let i = 0;
  const elemento = document.getElementById(elementoId);
  elemento.innerHTML = "";
  const intervalo = setInterval(() => {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, velocidade);
}
function atualizarContador() {
  const agora = new Date();
  const dataInicio = new Date('2019-05-14T09:30:30');
  const diffMs = agora - dataInicio;

  const totalSegundos = Math.floor(diffMs / 1000);
  const totalMin = Math.floor(totalSegundos / 60);
  const totalHoras = Math.floor(totalMin / 60);
  const dias = Math.floor(totalHoras / 24);

  const horas = totalHoras % 24;
  const minutos = totalMin % 60;
  const segundos = totalSegundos % 60;

  document.getElementById("contador").textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos 💖`;
}
