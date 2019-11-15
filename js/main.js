    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        mobileFirst: true,
    });

    let menuShow = document.querySelector('.menu-bar');
    let bodyOverflow = document.querySelector('body');
    let menuShadow = document.querySelector('.menushadow');
    let menu = document.querySelector('.menu')
    let btnSale = document.querySelector('.btn-sale')

    menuShow.addEventListener('click', menuFunction);

    function menuFunction() {
        if (menuShow.checked) {
            menu.style.right = '0';

            bodyOverflow.style.overflowY = 'hidden';

            menuShadow.style.right = '0';

            btnSale.addEventListener('click', hidden);

            let links = document.querySelectorAll('.menu-item');

            for (let link of links) {
                link.addEventListener('click', hidden);
            }
        } else {
            menu.style.right = '-1050px';

            bodyOverflow.style.overflowY = 'scroll';

            menuShadow.style.right = '-1050px';
        }
    }

    function hidden() {
        menuShow.checked = false;

        menu.style.right = '-1050px';

        bodyOverflow.style.overflowY = 'scroll';

        menuShadow.style.right = '-1050px';
    }

    let anchors = document.querySelectorAll("a[href*='#']:not([href='#'])");

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }