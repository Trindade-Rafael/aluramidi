
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas =document.querySelectorAll('.tecla');
let contador =0;


while(contador <listaDeTeclas.length){
    listaDeTeclas[contador].onclick =tocaSom;
    contador =contador +1;
    console.log(contador);
}

