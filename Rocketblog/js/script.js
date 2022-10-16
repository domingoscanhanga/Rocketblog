const btnMenu = document.querySelector('#btn-menu')
function toggleMenu () {
	const nav = document.querySelector ('#nav')
	nav.classList.toggle('mostrar-menu')
}
btnMenu.addEventListener('click', toggleMenu)