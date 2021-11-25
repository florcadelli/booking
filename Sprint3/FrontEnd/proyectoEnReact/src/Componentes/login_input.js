import React from 'react'; // Importo React.
import '../styles/forms.css'; // Importo los estilos CSS.
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'; //Importo ícono de FontAwesome.

export default function Login_input (props) {
    
    let label = "";
    const {/* handleLength, */ passwordVisiblity, handleChange} = props

    /* const passwordVisiblity = () => {
        props.type === "password" ? type = "text" : type = "password";
    }; */

    switch (props.type) { // Según las props se elige el label.
        case "password":
            label = "Contraseña";
            break;
        case "text":
            label = "Contraseña";
            break;
        case "email":
            label = "Correo electrónico";
            break;
        default:
            break;
    }

    // Input
    return (<>
        <label>
            {label}<span className="asterisk_input"></span>   
            <input onChange={/* handleLength, */ handleChange} type={props.type} name={props.type} id={props.type} required/>  {props.type !== "email" ? <FontAwesomeIcon className="passwordIcon" icon={faEyeSlash} onClick={passwordVisiblity}/> : ""}
        </label>
    </>)

} 

// export default Login_input; // Exporto para utilizar el componente