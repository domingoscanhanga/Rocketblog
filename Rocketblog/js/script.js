const $btnMenu = document.querySelector('#btn-menu')   
function mostarMenuEsconderMenu ()  {
    const $nav = document.querySelector ('#nav')
    $nav.classList.toggle('mostar-menu')
}   
$btnMenu.addEventListener('click', mostarMenuEsconderMenu) 

