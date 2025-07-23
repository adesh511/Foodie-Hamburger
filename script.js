const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');

const goTotop = document.querySelector('.go-to-top') 

goTotop.addEventListener('click',() => {
    scrollTo(0,0);
})

hamburgerIcon.addEventListener('click', () => {
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click',() => {
    headerContent.classList.remove('menu-open');
})