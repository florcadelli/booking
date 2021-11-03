window.onload = () => {

    class UserInformation {
        constructor() {
            this.firstName = null;
            this.lastName = null;
            this.email = null;
            this.password = null;
        }

        setFirstName(name) {
            this.firstName = name
        }

        setLastName(lastName) {
            this.lastName = lastName
        }

        setEmail(email) {
            this.email = email;
        }

        setPassword(password) {
            this.password = password;
        }
    }

    const formCreateAcount = document.forms.formCreateAcount;

    const name = formCreateAcount.name;
    const lastName = formCreateAcount.lastName;
    const email = formCreateAcount.email;
    const confirmEmail = formCreateAcount.confirmEmail;
    const password = formCreateAcount.password;
    const confirmPassword = formCreateAcount.confirmPassword;

    formCreateAcount.addEventListener('submit', (e) => {
        e.preventDefault();

        const userName = name.value.trim();
        const userLastName = lastName.value.trim();
        const userEmail = email.value.trim();
        const userConfirmEmail = confirmEmail.value.trim();
        const userPassword = password.value.trim();
        const userConfirmPassword = confirmPassword.value.trim();

        const validUserName = validateInput(name, userName);
        const validUserLastName = validateInput(lastName, userLastName);
        const validUserEmail = (validateInput(email, userEmail) && validateEmail(email, userEmail));
        const validUserConfirmEmail = (validateInput(confirmEmail, userConfirmEmail) && validateConfirmEmail(confirmEmail, userEmail, userConfirmEmail));
        const validUserPassword = (validateInput(password, userPassword) && validatePasswordLenght(password, userPassword));
        const validUserConfirmPassword = (validateInput(confirmPassword, userConfirmPassword) && validatePasswordLenght(confirmPassword, userConfirmPassword) && validateConfirmPassword(confirmPassword, userPassword, userConfirmPassword));

        if (validUserName && validUserLastName && validUserEmail && validUserConfirmEmail && validUserPassword && validUserConfirmPassword) {
            const userInformation = new UserInformation();
            userInformation.setFirstName(name.value);
            userInformation.setLastName(lastName.value);
            userInformation.setEmail(email.value);
            userInformation.setPassword(password.value);

            alert("Se ha registrado correctamente")
            location.href = './categories.html';
        }

    });

    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    });

}

function validateInput(input, inputValue) {
    if (inputValue === '') {
        setErrorFor(input, 'Este campo es obligatorio')
    } else {
        setSuccesFor(input)
        return true;
    }
}

function validateEmail(email, emailValue) {
    if (!isvalidEmail(emailValue)) {
        setErrorFor(email, 'El mail no cuenta con un formato válido')
    } else {
        setSuccesFor(email)
        return true;
    }
}

function validateConfirmEmail(confirmEmail, emailValue, confirEmailValue) {
    if (emailValue !== confirEmailValue) {
        setErrorFor(confirmEmail, 'El email no coincide')
    } else {
        setSuccesFor(confirmEmail)
        return true;
    }
}

function validatePasswordLenght(password, passwordValue) {
    if (passwordValue.length < 6) {
        setErrorFor(password, 'La contraseña debe tener mínimo 6 caracteres')
    } else {
        setSuccesFor(password)
        return true;
    }
}

function validateConfirmPassword(confirmPassword, passwordValue, confirmPasswordValue) {
    if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, 'La contraseña no coincide')
    } else {
        setSuccesFor(confirmPassword)
        return true;
    }
}

function setErrorFor(input, message) {
    const inputError = input.parentElement;
    const errorMessage = inputError.querySelector('p');
    errorMessage.innerText = message;
    input.className = 'error-color';
}

function setSuccesFor(input) {
    const inputError = input.parentElement;
    const errorMessage = inputError.querySelector('p');
    errorMessage.innerText = "";
    input.className = 'success-color';
}

function isvalidEmail(email) {
    const validateEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return validateEmail.test(email);
}










