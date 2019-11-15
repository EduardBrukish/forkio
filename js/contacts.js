let menuShow = document.querySelector('.menu-bar');
let menu = document.querySelector('.menu')
let bodyOverflow = document.querySelector('body');
let menuShadow = document.querySelector('.menushadow');

menuShow.addEventListener('click', menuFunction);


function menuFunction() {
    if (menuShow.checked) {
        menu.style.right = '0';

        menuShadow.style.right = '0';

        bodyOverflow.style.overflowY = 'hidden';
    } else {
        menu.style.right = '-1050px';

        menuShadow.style.right = '-1050px';

        bodyOverflow.style.overflowY = 'scroll';
    }
}