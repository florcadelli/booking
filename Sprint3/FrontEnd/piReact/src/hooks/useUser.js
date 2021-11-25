import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router";
import Context from "../context/userContext"

export default function useUser() {
    const { jwt, setJWT } = useContext(Context);
    const [error, setError] = useState(false)
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

    // useCallback para evitar crear la funcion cada vez que actualizamos
    const login = useCallback(({ username, password }) => {

        fetch('http://3.16.157.192:8080/authenticate', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json();
                } else {
                    // setError(true)
                    throw new Error("Credenciales invalidas")
                }
            })
            .then(data => {
                console.log("anda el fetch")
                console.log(data.jwtToken)
                setJWT(data.jwtToken)
                setUsername("username")
                console.log(username)
            })
            .catch(err => {
                setError(true)
                console.error(err)
            })
    }, [setJWT])

    // para limpiar el jwt al hacer logout
    const logout = useCallback(() => {
        setJWT(null)
        navigate("/")
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        hasLoginError: error,
        username: username,
        login,
        logout
    }
}