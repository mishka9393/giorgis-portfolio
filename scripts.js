function openmenu() {
    document.querySelector('.mobile-menu-div').classList.add('show-menu-div');
    document.querySelector('.menu-open').classList.add('hide');
    document.querySelector('.menu-close').classList.add('show-menu-div');
    document.querySelector('.header').classList.add('header-made-sticky');
}

function closemenu() {
    document.querySelector('.mobile-menu-div').classList.remove('show-menu-div');
    document.querySelector('.menu-open').classList.remove('hide');
    document.querySelector('.menu-close').classList.remove('show-menu-div');
    document.querySelector('.header').classList.remove('header-made-sticky');
}