let image = document.getElementById('myImage')
let colorButton = document.getElementById('color-button')
let wheelButton = document.getElementById('crazy-button')

function blooming() {
	image.src.match('dog.png') ? image.src = './images/THC-CHAIN.png' : image.src = './images/dog.png'
}
image.addEventListener('click', blooming)


