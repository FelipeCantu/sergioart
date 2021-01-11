const navbarToggler = document.querySelector('.navbartoggle');
const mainWrap = document.querySelector('.wrap');

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('active');
    mainWrap.classList.toggle('active');
})