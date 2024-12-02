// script.js
const ralph = document.getElementById("ralph");
const scoreBoard = document.getElementById("score");
const gameContainer = document.getElementById("game-container");

let score = 0;

// Função para mover o Ralph aleatoriamente
function moveRalph() {
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;
  const ralphWidth = ralph.offsetWidth;
  const ralphHeight = ralph.offsetHeight;

  // Coordenadas aleatórias dentro do container
  const randomX = Math.random() * (containerWidth - ralphWidth);
  const randomY = Math.random() * (containerHeight - ralphHeight);

  // Aplicando novas posições
  ralph.style.left = `${randomX}px`;
  ralph.style.top = `${randomY}px`;
}

// Função para atualizar o placar ao clicar no Ralph
ralph.addEventListener("click", () => {
  score += 1;
  scoreBoard.textContent = score;
  moveRalph(); // Move o Ralph ao ser clicado
});

// Move o Ralph a cada segundo
setInterval(moveRalph, 1000);
