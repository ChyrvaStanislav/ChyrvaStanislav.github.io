const form = document.querySelector('form');

// Submit and collect data ----------------------------------------------------------

const onSubmit = (event) => {
	event.preventDefault();

	const inputCollection = form.querySelectorAll('input');
	const values = {};

	inputCollection.forEach(input => values[input.name] = input.value);
	console.log(values);
}

form.addEventListener('submit', onSubmit)

// Submit on enter ----------------------------------------------------------

const submitFormOnEnterPress = (event) => {
	event.stopPropagation()
	if (event.keyCode === 13) {
		form.requestSubmit();
	}
}

window.addEventListener('keyup', submitFormOnEnterPress);

// Mask ?!= ----------------------------------------------------------

const inputCollection = form.querySelectorAll('input');

const onInput = (event) => {
	event.target.value = event.target.value
		.replaceAll('?', '')
		.replaceAll('!', '')
		.replaceAll('=', '')
}

inputCollection.forEach(input => {
	input.addEventListener('input', onInput);
})

// Validate passwords ----------------------------------------------------------

const repeatPasswordInput = document.querySelector('#repeat_password');
const passwordInput = document.querySelector('#password');
const errorSpan = document.querySelector('span.error');

const validatePasswords = (event) => {
	if (event.target.value !== passwordInput.value) {
		errorSpan.innerHTML = 'Пароли не совпадают!!'
	}
}

const removePasswordError = () => {
	errorSpan.innerHTML = '';
}

repeatPasswordInput.addEventListener('blur', validatePasswords);
repeatPasswordInput.addEventListener('focus', removePasswordError);

// Show passwords ----------------------------------------------------------

const iconsCollection = document.querySelectorAll('.icon');

const togglePasswordView = (event) => {
	const input = event.currentTarget.parentNode.querySelector('input');
	const icon = event.currentTarget.parentNode.querySelector('img');
	if (input.type === 'password') {
		input.type = 'text';
		icon.src = './svg/eye-off.svg';
	} else {
		input.type = 'password';
		icon.src = './svg/eye.svg';
	}
}

iconsCollection.forEach(icon => icon.addEventListener('click', togglePasswordView))