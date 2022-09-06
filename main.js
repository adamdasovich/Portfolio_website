let image = document.getElementById('myImage')

function blooming() {
	image.src.match('dog.png') ? image.src = 'dog_grey2.png' : image.src = 'dog.png'
}
image.addEventListener('click', blooming)