const $btnMenu = document.querySelector ('#btn-menu')
function toggleMenu () {
	const $headerNav = document.querySelector ('#header--nav')
	$headerNav.classList.toggle('MenuMobile')
}
$btnMenu.addEventListener ('click', toggleMenu)
