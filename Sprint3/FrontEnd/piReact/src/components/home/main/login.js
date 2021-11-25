import { useState, useEffect, useContext } from 'react'; // Importo React y componentes a usar.
import Swal from 'sweetalert2'; // Importo SweetAlert
import '../../../styles/__forms.css'; // Importo los estilos CSS.
import Input from './login_input.js'; // Importo el componente para los inputs.
import Button from './login_button.js'; // Importo el componente para el botón.
import Register from './FormCreateAccount.js' // Importo el componente de registro.
import Main from './Main.jsx' // Importo el Main.
import Header from '../header/Header.jsx' // Importo Header
import Footer from '../footer/Footer.jsx' // Importo Foote
import { Link, Redirect, useNavigate } from "react-router-dom"; // Importo los componentes de React Router.
import useUser from '../../../hooks/useUser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import ContextData from '../../../context/userDataContext';

function Login(props) {

    const navigation = useNavigate()

    const [errorPassword, setErrorPassword] = useState("")
    const [type, setType] = useState("password")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [submit, setSubmit] = useState(false)
    const { hasLoginError, login, isLogged } = useUser()
    const { setUsername } = useContext(ContextData);

    // Hardcodeo de credenciales válidas para primer Sprint.
    // const testUser = {
    //    email: "diego@gmail.com",
    //    password: "1234567",
    //    name: "Diego"
    //}

    // Guardo lo que el usuario va escribiendo. 
    const handleChange = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value)
            setUsername(event.target.value)
            console.log("Email") // Debug
            console.log(event.target.value) // Debug
        } else if (event.target.type === "password" || event.target.type === "text") {
            setPassword(event.target.value)
            setErrorPassword(event.target.value.length <= 6 && event.target.value.length !== 0 ? "La contraseña debe tener más de 6 caracteres." : "")  // Valido la longitud de la contraseña y muestro cartel de error.
            console.log("login")
            console.log(event.target.value.length); // Debug para saber que llega la longitud del input ingresado.
            console.log(password) // Debug para saber si el condicional funciona.
        }
    }

    // Muestro y oculto la contraseña.
    const passwordVisiblity = () => {
        type === "password" ? setType("text") : setType("password");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)

        if (password.length > 6) {
            const username = email
            login({ username, password });
            console.log(hasLoginError)
        }

        
        /* if (hasLoginError) {
            Swal.fire({
                icon: 'warning',
                toast: true,
                text: 'Por favor, vuelva a intentarlo. Sus credenciales son inválidas',
                confirmButtonColor: '#FBC02D',
                confirmButtonText: 'Volver a intentar'
            }) //SweetAlert inválido
        } else if (!hasLoginError) {
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido!',
            confirmButtonColor: '#FBC02D'
        });
        } */

    }

    // const handleSubmit = (event) => { // Se validan las credenciales ingresadas.
    //     event.preventDefault();
    //     console.log(email)
    //     if (password !== null && email !== null) { // Valido el usuario y contraseña
    //         Swal.fire({
    //             icon: 'success',
    //             title: '¡Bienvenido de nuevo, ' + testUser.name + '!',
    //             confirmButtonColor: '#FBC02D'
    //         })
    //         //.then((value) => {
    //             login({email, password})
    //             // login({email, password}) para cuando tengamos jwt
    //         }
    //         //) //SweetAlert exitoso
    //     //} 
    //     else if (errorPassword != "") { // Valido que la contraseña sea válida.
    //         Swal.fire({
    //             icon: 'error',
    //             toast: true,
    //             text: 'Su email y contraseña no son válidos',
    //             confirmButtonColor: '#FBC02D',
    //             confirmButtonText: 'Volver a intentar'
    //         }) //SweetAlert fallido
    //     } else { // Mensaje de error.
    //         console.log(password) // Debug
    //         Swal.fire({
    //             icon: 'warning',
    //             toast: true,
    //             text: 'Por favor, vuelva a intentarlo. Sus credenciales son inválidas',
    //             confirmButtonColor: '#FBC02D',
    //             confirmButtonText: 'Volver a intentar'
    //         }) //SweetAlert inválido
    //     }
    //     /* {if (submit) {
    //         navigation("/logedin")
    //     }} */
    // }

    useEffect(() => {
        if (isLogged) {
            navigation(-1)
        }
    }, [isLogged, navigation])



    // Renderizo Formulario
    return (<>
        <form name="formLogin" onSubmit={handleSubmit} /* method="POST" */ className="form-login">
            <h1 className="title-form">Iniciar sesión</h1>

            <Input handleChange={handleChange} type="email" />
            <Input handleChange={handleChange} passwordVisiblity={passwordVisiblity} type={type} />

            <Button />

            <p className="createAcount">¿Aún no tenes cuenta?<Link className="input-createAcount" to="/createAccount"><span className="span-form"> Registrate</span></Link></p>

            {<div className="errorLogin">{errorPassword}</div>}
            {console.log(hasLoginError)}
            {hasLoginError && <p className="LoginErrorApi"><FontAwesomeIcon icon={faExclamationCircle}/> Por favor, vuelva a intentarlo. Sus credenciales son inválidas</p>}
        </form>

    </>)

}


export default Login;