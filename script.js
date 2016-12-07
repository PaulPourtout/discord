var boutonEnter = document.getElementById('bouton-enter');
var header = document.getElementById('header-main');
var bodyPage = document.getElementById('body')


boutonEnter.onclick = function() {
    header.classList.add('toMainPage');
    bodyPage.classList.remove('lockScroll');
};
