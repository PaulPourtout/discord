var boutonEnter = document.getElementById('bouton-enter');
var header = document.getElementById('header-main');
var bodyPage = document.getElementById('body');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

boutonEnter.onclick = function() {
    header.classList.add('toMainPage');
    bodyPage.classList.remove('lockScroll');
};
