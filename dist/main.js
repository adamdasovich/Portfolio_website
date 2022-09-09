let image = document.getElementById('bear')
let dog = document.getElementById('dog')

function blooming() {
	image.src.match('Heart.png') ? image.src = './images/bear.png' : image.src = './images/Heart.png'
}
image.addEventListener('click', blooming)


let rotateDeg = 0;

function rotate() {
	rotateDeg = rotateDeg + 20
	dog.style.transform = `rotate(${rotateDeg}deg)`
}
dog.addEventListener('click', rotate);



