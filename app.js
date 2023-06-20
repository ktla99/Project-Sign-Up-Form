const form  = document.querySelector("form");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.errorPass");

const passwordConfirm = document.getElementById("confirmPass");
const passwordConfirmError = document.querySelector("#confirmPass + span.errorPassTwo");



password.addEventListener("input", (Event) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "errorPass"
    } else {
        showError();
    }
});

form.addEventListener("submit", (Event) => {
    if (!password.validity.valid) {
        showError();
        Event.preventDefault();
    }
});

passwordConfirm.addEventListener("input", (Event) => {
    if (passwordConfirm.validity.valid) {
        passwordConfirmError.textContent = "";
        passwordConfirmError.className = "errorPassTwo"
    } else {
        showError2();
    }
});

form.addEventListener("submit", (Event) => {
    if (!passwordConfirm.validity.valid) {
        showError2();
        Event.preventDefault();
    }
});

function showError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter a valid password.";
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = "Characters need to be between 8-16 characters and include at least: 1 uppercase, 1 lowercase, 1 number and 1 special character.";
    }
    passwordError.className = "errorPass active";
};

function showError2() {
    let valueOne = document.querySelector("input[name=password]");
    let valueTwo = document.querySelector("input[name=confirmPass]");
    if (passwordConfirm.validity.valueMissing) {
        passwordConfirmError.textContent = "Please re-enter the password.";
    } else if (valueOne !== valueTwo) {
        passwordConfirmError.textContent = `Passwords do not match.`;
    } else if (passwordConfirm.validity.patternMismatch) {
        passwordConfirmError.textContent = "Password is invalid.";
    }
    passwordConfirmError.className = "errorPassTwo active";
};

