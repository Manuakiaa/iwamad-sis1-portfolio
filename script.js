const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.style.display = 'none';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name!';
        isValid = false;
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        emailError.textContent = 'Email field cannot be empty!';
        isValid = false;
    } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.textContent = 'Invalid email format (missing @ or dot)!';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'You forgot to write a message!';
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
    }
});