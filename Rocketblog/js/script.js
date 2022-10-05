const $btnMobile = document.querySelector('#btn-mobile')
function toggleMenu () {
    const $nav = document.querySelector('.nav-add')
    $nav.classList.toggle('mostrar-menu')
}
$btnMobile.addEventListener('click', toggleMenu)

const fecharMenu = document.querySelector('.menu a')
function removerMenu (){
    const $nav = document.querySelector('.nav-remove')
    $nav.classList.remove('mostrar-menu') 
}
fecharMenu.addEventListener('click', removerMenu)
console.log(fecharMenu)


