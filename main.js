let pontos = 0;
let tempo = 30; // segundos
let jogo = document.getElementById('jogo');
let pontosEl = document.getElementById('pontos');

function criarGrao() {
  let grao = document.createElement('div');
  grao.className = 'grao';
  grao.style.left = Math.random() * (jogo.clientWidth - 40) + 'px';
  grao.style.top = Math.random() * (jogo.clientHeight - 40) + 'px';

  grao.onclick = function () {
    pontos++;
    pontosEl.textContent = pontos;
    grao.remove();
  };

  jogo.appendChild(grao);

  setTimeout(() => {
    grao.remove();
  }, 2000);
}

function iniciarJogo() {
  let intervalo = setInterval(criarGrao, 800);
  let cronometro = setInterval(() => {
    tempo--;
    if (tempo <= 0) {
      clearInterval(intervalo);
      clearInterval(cronometro);

      // cria mensagem dentro do jogo em vez de alert
      let msg = document.createElement('div');
      msg.textContent = "⏰ Tempo esgotado! Pontuação final: " + pontos;
      msg.style.position = "absolute";
      msg.style.top = "50%";
      msg.style.left = "50%";
      msg.style.transform = "translate(-50%, -50%)";
      msg.style.background = "rgba(255,248,240,0.95)";
      msg.style.padding = "20px 30px";
      msg.style.border = "2px solid #6f4e37";
      msg.style.borderRadius = "10px";
      msg.style.fontSize = "20px";
      msg.style.fontWeight = "bold";
      msg.style.color = "#6f4e37";
      msg.style.zIndex = "10";

      jogo.innerHTML = "";
      jogo.appendChild(msg);

      pontos = 0;
      pontosEl.textContent = pontos;
      tempo = 30;

      setTimeout(iniciarJogo, 2000);
    }
  }, 1000);
}

iniciarJogo();
