import { useState } from "react"
import { Button } from "../components/Button"
import { Loader } from "../components/Loader"
import { getToken } from "../api/tokenApi"
import { useNavigate } from "react-router-dom"

import "./style/Login.css"

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!username) {
            setErrorMsg("Introduce el nombre de usuario")
            return
        }

        if (!password) {
            setErrorMsg("Introduce la contraseña")
            return
        }

        setLoading(true)

        try {
            const res = await getToken({ username, password })
            const data = res.data
            localStorage.setItem('token', data.token)
            navigate("/admin/")
            
        } catch (error) {
            setErrorMsg("Usuario o contraseña incorrecta")
        }

        setLoading(false)
    }

    return (
            <form className="Login" onSubmit={handleSubmit}>
                <h1>Iniciar Sesión</h1>
                    <input value={username} onChange={ e => setUsername(e.target.value)} type="text" placeholder="Username" />
                    <input value={password} onChange={ e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    {errorMsg && <span className="error-msg">{errorMsg}</span>}
                    {loading 
                    ? <Loader />
                    : <Button type={"submit"} variant={"main"}>Iniciar Sesión</Button>
                    }
                    
            </form>
    )
}