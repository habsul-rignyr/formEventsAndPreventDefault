const form = document.querySelector('#signup-form');
const creditCard = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');


form.addEventListener('submit', function(e){
	e.preventDefault();
	console.log('cc', creditCard.value);
	console.log('terms', termsCheckbox.checked);
	console.log('veggie', veggieSelect.value);
	
});