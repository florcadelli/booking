import React from 'react'
import useForm from '../../hooks/useForm';
import validate from './validateInputs'
import '../../styles/__forms.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const FormCreateAccount = () => {
    const {handleChange, values, handleSubmit, errors, togglePasswordVisiblity, passwordShown, togglePasswordVisiblity2, passwordShown2} = useForm(validate);

    return (
        <div>
            <form class="form-create-account" name="formCreateAcount" onSubmit={handleSubmit}>
                <h1 class="title-form">Crear cuenta</h1>

                    <div className="information">
                        <label htmlFor="name" className="label-form text">
                            Nombre<span class="asterisk_input"></span>
                            <input className="input-form" type="text" name="name" id="name" value={values.name} onChange={handleChange} />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </label>
                        <label htmlFor="lastName" className="label-form text">
                            Apellido<span className="asterisk_input"></span>
                            <input className="input-form" type="text" name="lastName" id="lastName" value={values.lastName} onChange={handleChange}/>
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </label>
                    </div>

                    <label htmlFor="email" className="label-form">
                        Correo electrónico<span className="asterisk_input"></span>
                        <input className="input-form"  type="email" name="email" id="email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </label>
                    <label htmlFor="confirmEmail" className="label-form">
                        Confirmar correo electrónico<span className="asterisk_input"></span>
                        <input className="input-form"  type="email" name="confirmEmail" id="confirmEmail" value={values.confirmEmail} onChange={handleChange}/>
                        {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}
                    </label>

                    <label htmlFor="password" className="label-form">
                        Contraseña<span className="asterisk_input"></span>
                        <input className="input-form" type={passwordShown ? "text" : "password"} name="password" id="password" value={values.password} onChange={handleChange} />
                        <FontAwesomeIcon className="passwordIcon ca" icon={faEyeSlash} onClick={togglePasswordVisiblity}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </label>
                    <label htmlFor="confirmPassword" className="label-form">
                        Confirmar contraseña<span className="asterisk_input"></span>
                        <input className="input-form" type={passwordShown2 ? "text" : "password"}  name="confirmPassword" id="confirmPassword" value={values.confirmPassword} onChange={handleChange}/>
                        <FontAwesomeIcon className="passwordIcon ca" icon={faEyeSlash} onClick={togglePasswordVisiblity2}/>
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </label>

                <button className="form-button" type="submit">Crear cuenta</button>
                <p className="login">¿Ya tienes cuenta?<Link class="input-login" to={"/login"}><span className="span-form"> Iniciar sesión</span></Link></p>
            </form>
        </div>
    )
}


export default FormCreateAccount
