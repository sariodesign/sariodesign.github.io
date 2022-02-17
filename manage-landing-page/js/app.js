const menuBtn = document.querySelector('.js-menu-btn');
const menuNav = document.querySelector('.js-menu');
const bodyPage = document.querySelector('.js-body');

menuBtn.addEventListener('click', () => {
    menuNav.classList.add('is-visible');
    bodyPage.classList.add('is-locked');
})
