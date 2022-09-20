let image = document.getElementById('bear')
let dog = document.getElementById('dog')
const searchForm = document.querySelector('form')
const searchResultDiv = document.querySelector('.search-result')
const container = document.querySelector('.container')
const amountElement = document.getElementById('amount')

console.log(amountElement)

paypal.Buttons({
	createOrder: function (data, actions) {
		// This function sets up the details of the transaction, including the amount and line item details.
		return actions.order.create({
			purchase_units: [{
				amount: {
					value: '0.01'
				}
			}]
		});
	},
	onApprove: function (data, actions) {
		// This function captures the funds from the transaction.
		return actions.order.capture().then(function (details) {
			// This function shows a transaction success message to your buyer.
			alert('Transaction completed by ' + details.payer.name.given_name);
		});
	}
}).render('#paypal');
//This function displays Smart Payment Buttons on your web page.


function blooming() {
	image.src.match('Heart.png') ? image.src = './images/bear.png' : image.src = './images/Heart.png'
}
image.addEventListener('click', blooming)

let rotateDeg = 0;
let searchTerm = '';

function rotate() {
	rotateDeg = rotateDeg + 20
	dog.style.transform = `rotate(${rotateDeg}deg)`
}
dog.addEventListener('click', rotate);

searchForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const searchTerm = e.target.querySelector('input').value
	fetchAPI()
})

async function fetchAPI() {
	const baseUrl = `https://api.edamam.com/search/?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`
	const response = await fetch(baseUrl)
	console.log(response)
}






