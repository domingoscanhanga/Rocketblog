const $btnMenu = document.querySelector('#btn-menu')
console.log($btnMenu) 
function activarDesactivarMenu () {
    const $nav = document.querySelector('#nav')
    $nav.classList.toggle('mostrar-menu')
}
$btnMenu.addEventListener('click', activarDesactivarMenu)

