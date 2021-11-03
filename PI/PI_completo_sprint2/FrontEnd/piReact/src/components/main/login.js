import React, { Component} from 'react'; // Importo React y componentes a usar.
import Swal from 'sweetalert2'; // Importo SweetAlert
import '../../styles/__forms.css'; // Importo los estilos CSS.
import Input from './login_input.js'; // Importo el componente para los inputs.
import Button from './login_button.js'; // Importo el componente para el botón.
import Register from './FormCreateAccount.js' // Importo el componente de registro.
import Main from './Main.jsx' // Importo el Main.
import Header from '../header/Header.jsx' // Importo Header
import Footer from '../footer/Footer.jsx' // Importo Foote
import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter} from "react-router-dom"; // Importo los componentes de React Router.

class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            errorPassword: "",
            type: "password",
            password: "",
            email: "",
            submit: false
        }
    }


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
            console.log(event.target.value.length); // Debug para saber que llega la longitud del input ingresado.
           // console.log(errorPassword) // Debug para saber si el condicional funciona.
        }
    }

    // Muestro y oculto la contraseña.
    passwordVisiblity = () => { 
        this.state.type === "password" ? this.setState({type: "text"}) : this.setState({type: "password"}); 
    };

    handleSubmit = (event) => { // Se validan las credenciales ingresadas.
        event.preventDefault();
        if (this.state.password === this.testUser.password && this.state.email === this.testUser.email) { // Valido el usuario y contraseña
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido de nuevo, ' + this.testUser.name + '!',
                confirmButtonColor: '#1DBEB4'
            })
            //.then((value) => {
                /* document.formLogin.submit() */ // El formulario se envía.
                this.setState({submit: true})
                /* return <Redirect push to={pathname: '/main', state: ''}/> */
            }
            //) //SweetAlert exitoso
        //} 
        else if (this.state.errorPassword != "") { // Valido que la contraseña sea válida.
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
        const { history } = this.props
        {if (this.state.submit) {
            history.push("/logedin")
        }}
        return (<>
            
                <form name="formLogin" onSubmit={this.handleSubmit} /* method="POST" */ className="form-login">
                        <h1 className="title-form">Iniciar sesión</h1>

                        <Input handleChange={this.handleChange} type="email"/>
                        <Input handleChange={this.handleChange} passwordVisiblity={this.passwordVisiblity} type={this.state.type}/>
                    
                        <Button/>

                        <p className="createAcount">¿Aún no tenes cuenta?<Link className="input-createAcount" to="/createAccount"><span className="span-form"> Registrate</span></Link></p>
                        
                        {<div className="errorLogin">{this.state.errorPassword}</div>}

                </form>

        </>)
    }
    
}

export default withRouter(Login);