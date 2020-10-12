
function novaPosicao(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function animateDiv(main, bolha) {
  bolha.style.top = novaPosicao(0, main.clientHeight - bolha.clientHeight)+'px';
  bolha.style.left = novaPosicao(0, main.clientWidth - bolha.clientWidth)+'px';
}

const bolhas = document.getElementsByClassName("bolha");
const main = document.getElementsByTagName("main")[0];

for (let bolha of bolhas) {
  bolha.addEventListener('mouseover', function() {
    animateDiv(main, bolha);
  });
}
