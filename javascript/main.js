const form = document.getElementById('form')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Please provide a valid email')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Please provide a valid email');
    } else {
        const formControl = email.parentElement
        formControl.classList.remove('error')
        console.log('success')

    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form-control error'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}