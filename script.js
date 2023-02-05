const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};

creditCardInput.addEventListener('input', (e) => {
	console.log('CC Changed!', e);
	formData['cc'] = e.target.value;
});

veggieSelect.addEventListener('input', (e) => {
	console.log('Veggie Changed!', e);
	formData['veggie'] = e.target.value;
});

termsCheckbox.addEventListener('change', (e) => {
	console.log('Terms Changed!', e);
	formData['terms'] = e.target.checked;
}

// form.addEventListener('submit', function(e){
// 	e.preventDefault();
// 	console.log('cc', creditCard.value);
// 	console.log('terms', termsCheckbox.checked);
// 	console.log('veggie', veggieSelect.value);
	
// });