let menuShow = document.querySelector('.menu-bar');

menuShow.addEventListener('click', menuFunction);

function menuFunction() {
    if (menuShow.checked) {
        document.querySelector('.menu').style.right = '0';
    } else {
        document.querySelector('.menu').style.right = '-1050px';
    }
}