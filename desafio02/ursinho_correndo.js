
let btnSurgir = document.getElementById('btn-surgir');
let btnAndar = document.getElementById('btn-ande');
let btnParar = document.getElementById('btn-pare');
let img = document.querySelector('img');
let parado = false;

const imgUrsoParado = 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png';
const imgUrsoAndando1 = 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png';
const imgUrsoAndando2 = 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png';

function apareca() {
	img.src = imgUrsoParado;
  btnAndar.style.display = "inline";
  btnSurgir.style.display = "none";
}

function ande() {
  if (!parado) {
    if (img.src == imgUrsoAndando1) {
      img.src = imgUrsoAndando2;
    } else {
      img.src = imgUrsoAndando1;
    }
    btnParar.style.display = "inline";
    btnAndar.style.display = "none";
    setTimeout(ande, 200);  
  }
}

function pare(parar) {
	parado = parar;
	img.src = imgUrsoParado;
  btnAndar.style.display = "inline";
  btnParar.style.display = "none";
}

btnSurgir.onclick = apareca;

btnAndar.onclick = function() {
	pare(false);
	ande();
};

btnParar.onclick = function() {
	pare(true);
}
