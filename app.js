const form  = document.querySelectorAll("form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phoneNumber = document.getElementById("phoneNumber");
const mail = document.getElementById("mail");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.errorPass");

const passwordConfirm = document.getElementById("confirmPass");
const passwordConfirmError = document.querySelector("#confirmPass + span.errorPassTwo");

const button = document.querySelector("#account");


password.addEventListener("input", (Event) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "errorPass"
    } else {
        showError();
    }
});

form.forEach((Event) => {
    addEventListener("submit", (Event) => {
        if (!password.validity.valid) {
            showError();
            Event.preventDefault();
        }
    })
});

passwordConfirm.addEventListener("input", (Event) => {
    if (passwordConfirm.validity.valid) {
        passwordConfirmError.textContent = "";
        passwordConfirmError.className = "errorPassTwo"
    } else {
        showError2();
    }
});

form.forEach((Event) => {
    addEventListener("submit", (Event) => {
        if (!passwordConfirm.validity.valid) {
            showError2();
            Event.preventDefault();
        }
    })
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
    if (passwordConfirm.validity.valueMissing) {
        passwordConfirmError.textContent = "Please re-enter the password.";
    } else if (password !== passwordConfirm) {
        passwordConfirmError.textContent = `Passwords do not match.`;
    } 
    passwordConfirmError.className = "errorPassTwo active";
};

button.addEventListener("click", () => {
    form.forEach((formOne) => {
        formOne.reset();
    } )
})