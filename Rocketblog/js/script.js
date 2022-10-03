const btnMobile = document.querySelector ('#btn-mobile')
function toggleMenu() {
    const nav = document.querySelector('#nav')
    nav.classList.toggle('mostrar-menu')
    
}
btnMobile.addEventListener('click', toggleMenu)

