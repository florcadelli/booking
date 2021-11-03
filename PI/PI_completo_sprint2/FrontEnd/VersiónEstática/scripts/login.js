window.onload = () => {

    const testUserInformation = {
        email: "grupo4@digitalhouse.com",
        password: "12345678"
    }

    const formLogin = document.forms.formLogin;

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = formLogin.email.value;
        const password = formLogin.password.value;

        if (email === testUserInformation.email && password === testUserInformation.password) {
            location.href = './categories.html';
        } else {
            let error = document.querySelector("div.errorLogin");
            error.innerHTML = "<p>Por favor, vuelva a intentarlo sus credenciales son inválidas</p>"
        }
    })

    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    });
}

