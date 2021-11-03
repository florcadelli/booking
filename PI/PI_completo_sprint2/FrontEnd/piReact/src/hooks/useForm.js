import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

const useForm = (validate) => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)

    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            Swal.fire({
                icon: 'success',
                title: "Se ha registrado correctamente",
                confirmButtonColor: '#1DBEB4'
            })
            history.push("/");
        }
    },
        [errors, isSubmitting, history]
    );


    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    
    const togglePasswordVisiblity2 = () => {
        setPasswordShown2(passwordShown2 ? false : true);
    };

    return { handleChange, values, handleSubmit, errors, togglePasswordVisiblity, passwordShown, togglePasswordVisiblity2, passwordShown2}
}

export default useForm;