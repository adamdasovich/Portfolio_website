let image = document.getElementById('bear')
const rotateLeftButton = document.getElementById('rotate-left')
const rotateRightButton = document.getElementById('rotate-right')

let rotation = 0

function blooming() {
	image.src.match('Heart.png') ? image.src = './images/bear.png' : image.src = './images/Heart.png'
}
image.addEventListener('click', blooming)


function rotate(element, event) {
	if (event.target.id === 'rotate-left') {
		rotation - 15
	} else {
		rotation + 15
	}
	element.style.transform = `rotate(${rotation}deg)`
}