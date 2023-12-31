function validateEmail() {
    var emailInput = document.getElementById('uname');
    var email = emailInput.value;
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Please enter a valid email address.');
        emailInput.value = '';
    }
}

function validatePassword() {
    var passwordInput = document.getElementById('pwd');
    var password = passwordInput.value;
    var hasUppercase = false;
    for (var i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase() && isNaN(password[i])) {
            hasUppercase = true;
            break;
        }
    }
    var hasNumber = /\d/.test(password);
    var hasSpecialChars = /^[a-zA-Z0-9@]+$/.test(password);
    if (!hasUppercase || !hasNumber || !hasSpecialChars) {
        alert('Password must contain an uppercase letter, a number, and only allow @ as a special character.');
        passwordInput.value = '';
    }
}

function submitForm() {
    alert('Form submitted successfully!');
}