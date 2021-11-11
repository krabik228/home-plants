let header__burger = document.querySelector('.header__burger');
let navigation = document.querySelector('.main-navigation');
let back = document.querySelector('body');
let site = document.querySelector('.site-navigation');
let header = document.querySelector('.main-header');

header__burger.onclick = function(){
    
    if (header__burger.classList.contains('active') === false)
    {
        header__burger.classList.toggle('active');
        navigation.classList.toggle('active');
        back.classList.toggle('lock');
    }
    
    else {
        header__burger.classList.remove('active');
        navigation.classList.remove('active');
        back.classList.remove('lock');
    }
}

site.onclick = function () {
    back.classList.remove('lock');
}
