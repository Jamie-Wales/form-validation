const nameInput = document.querySelector('input');
const form = document.querySelector('form');
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('mail')
const thirdForm = document.getElementById('third-form');
const thirdEmail = document.getElementById('validateMail');
const emailError = document.querySelector('#validateMail + span.error')


nameInput.addEventListener('input', () => {
    nameInput.setCustomValidity('');
    nameInput.checkValidity();
})


nameInput.addEventListener('invalid', () => {
    if (nameInput.value === '') {
        nameInput.setCustomValidity('Enter your username');
    } else {
        nameInput.setCustomValidity('Usernames can only contain uppercase and lowercase')
    }
})



emailInput.addEventListener('input', (e) => {

    if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity('I am expectimg an email address!');
    } else {
        emailInput.setCustomValidity('');
    }
})



thirdEmail.addEventListener('input', (e) => {
    if (thirdEmail.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError();
    }
});


thirdForm.addEventListener('submit', (e) => {
    if (!thirdEmail.validity.valid)
    {
        showError();
        e.preventDefault();
        }
});

console.log(thirdForm);

function showError() {
    if (thirdEmail.validity.valueMissing) {
        emailError.textContent = 'You must enter an email address';
    } else if (thirdEmail.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email address'        
    }
    else if (thirdEmail.validity.tooShort) {
        emailError.textContent = `Details are too short they should be atleast ${thirdEmail.minLength} you have entered ${thirdEmail.value.length}`
    }

    emailError.className = 'error active';
}