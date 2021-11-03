import React, { Component, useState } from 'react'; // Importo React y componentes a usar.
import Swal from 'sweetalert2'; // Importo SweetAlert
import '../styles/forms.css'; // Importo los estilos CSS.
import Input from './login_input.js'; //Importo el componente para los inputs.
import Button from './login_button.js'; //Importo el componente para el botón.
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'; //Importo ícono de FontAwesome.

// Componente funcional.

class Login extends Component {

    constructor (props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            errorPassword: "",
            type: "password",
            password: "",
            email: ""
        }
    }

    // Declaro variables que usaré más adelante.
    /* let errorPassword = ""
    let type = "password"
    let password = ""
    let email = "" */

    // Hardcodeo de credenciales válidas para primer Sprint.
    testUser = {
        email: "diego@gmail.com",
        password: "1234567",
        name: "Diego"
    }

    // Guardo lo que el usuario va escribiendo.
    handleChange = (event) => {
        if (event.target.type === "email") {
            this.setState({email: event.target.value}) 
        } else if (event.target.type === "password" || event.target.type === "text") {
            this.setState({password: event.target.value})
            this.setState({errorPassword : event.target.value.length <= 6 && event.target.value.length !== 0 ? "La contraseña debe tener más de 6 caracteres." : ""})  // Valido la longitud de la contraseña y muestro cartel de error.
            // errorPassword = event.target.value.length <= 6 ? "La contraseña debe tener más de 6 caracteres." : "" // Valido la longitud de la contraseña y muestro cartel de error.
            console.log(event.target.value.length); // Debug para saber que llega la longitud del input ingresado.
            // console.log(errorPassword) // Debug para saber si el condicional funciona.
            //return errorPassword
        }
    }

    // Valido la longitud de la contraseña y muestro cartel de error.
   /*  handleLength = (event) => { // PROBLEMA
        console.log(event.target.value.length); // Debug para saber que llega la longitud del input ingresado.
            
//        errorPassword = event.target.value.length <= 6 ? "La contraseña debe tener más de 6 caracteres." : ""

        if (event.target.value.length <= 6) { // Validación de la longitud de la contraseña.
            // errorPassword = "La contraseña debe tener más de 6 caracteres."
        } else {
            // errorPassword = ""
        }

        //console.log(errorPassword) // Debug para saber si el condicional funciona.
        
    } */


    passwordVisiblity = () => { // PROBLEMA
        this.state.type === "password" ? this.setState({type: "text"}) : this.setState({type: "password"}); // Muestro y oculto la contraseña.
    };

    handleSubmit = (event) => { // Se validan las credenciales ingresadas.
        event.preventDefault();
        if (this.state.password === this.testUser.password && this.state.email === this.testUser.email) { // Valido el usuario y contraseña
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido de nuevo, ' + this.testUser.name + '!',
                confirmButtonColor: '#1DBEB4'
            }).then((value) => {
                document.formLogin.submit() // El formulario se envía.
            }) //SweetAlert exitoso
        } else if (this.state.errorPassword != "") { // Valido que la contraseña sea válida.
            Swal.fire({
                icon: 'error',
                text: 'Ingrese un email y contraseña válidos',
                confirmButtonColor: '#1DBEB4'
            }) //SweetAlert fallido
        } else { // Mensaje de error.
            Swal.fire({
                icon: 'warning',
                text: 'Por favor, vuelva a intentarlo. Sus credenciales son inválidas',
                confirmButtonColor: '#1DBEB4'
            }) //SweetAlert inválido
        }
        
    }

    // Renderizo Formulario
    render () {
        return (<> 
            <form name="formLogin" onSubmit={this.handleSubmit} /* method="POST" */>
                <h1>Iniciar sesión</h1>

                <Input handleChange={this.handleChange} type="email"/>
                <Input /* handleLength={this.handleLength} */ handleChange={this.handleChange} passwordVisiblity={this.passwordVisiblity} type={this.state.type}/>
                
                <Button/>
                            
                <p className="createAcount">¿Aún no tenes cuenta?<a className="input-createAcount" href="createAcount.html"><span> Registrate</span></a></p>
            
                {<div className="errorLogin">{this.state.errorPassword}</div>}

                {/* <div className="errorLogin">{handleChange, console.log(handleChange)}</div> //Debug */} 
            </form>
        </>)
    }
    
}

export default Login;