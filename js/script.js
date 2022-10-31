const $btnMenu = document.querySelector ('#btn-menu')
const $Menu = document.querySelector ('#menu')

function handleButtonClick (event) {
	const $headerNav = document.querySelector ('#header--nav')
	if(event.type === 'touchstart') event.preventDefault()
	event.stopPropagation()
	
	$headerNav.classList.toggle('MenuMobile')
	handleClickOutside($Menu, () => {
		$headerNav.classList.remove('MenuMobile')

	})
}
function handleClickOutside (targetElement, callBack) {
 const html = document.documentElement
 function handleHtmlClick (event) {
	if  (!targetElement.contains(event.target)) {
		targetElement.removeAttribute('data-target')
		html.removeEventListener('click',  handleHtmlClick)
		html.removeEventListener('touchstart', handleHtmlClick)
		callBack ()
	}
 }
 if (!targetElement.hasAttribute('data-target')) {
	html.addEventListener('click',  handleHtmlClick)
	html.addEventListener('touchstart', handleHtmlClick)
	targetElement.setAttribute('data-target', handleHtmlClick )
 }
}
$btnMenu.addEventListener ('click', handleButtonClick)
$btnMenu.addEventListener ('touchstart', handleButtonClick)
