    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        mobileFirst: true,
    });

    let menuShow = document.querySelector('.menu-bar');

    function menuFunction() {
        if (menuShow.checked) {
            document.querySelector('.menu').style.right = '0';
            let links = document.querySelectorAll('.menu-item');
            for (let link of links) {
                link.addEventListener('click', hidden);
            }
        } else {
            document.querySelector('.menu').style.right = '-1050px';
        }
    }

    function hidden() {
        menuShow.checked = false;
        document.querySelector('.menu').style.right = '-1050px';
    }

    let anchors = document.querySelectorAll("a[href*='#']:not([href='#'])");
    menuShow.addEventListener('click', menuFunction);

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