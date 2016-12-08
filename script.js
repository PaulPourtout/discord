var boutonEnter = document.getElementById('bouton-enter');
var header = document.getElementById('header-main');
var bodyPage = document.getElementById('body');
var caisseMario = document.getElementById('computerback4');
var itemMario = document.getElementById('spawnerbox');

// QUAND LA PAGE REFRESH RETOURNE EN HAUT DE LA PAGE
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

// AU CLIQUE LE HEADER DISPARAIT EN AJOUTANT UNE ANIMATION
boutonEnter.onclick = function() {
    header.classList.add('toMainPage');
    bodyPage.classList.remove('lockScroll');
};

// AU CLIQUE LA CAISSE MARIO S'ANIME ET UN OBJET EN SORT
caisseMario.onclick = function() {
    // RETRAIT DES CLASS D'ANIMATION
    itemMario.classList.remove('spawnerboxAnimation');
    caisseMario.classList.remove('shakeIt');

    // RESET ANIMATION
    void caisseMario.offsetWidth;
    void itemMario.offsetWidth;

    caisseMario.classList.add('shakeIt');
    itemMario.classList.add('spawnerboxAnimation');
}
