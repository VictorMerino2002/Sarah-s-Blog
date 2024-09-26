import { useState } from "react"
import { Button } from "../components/Button"
import { Loader } from "../components/Loader"
import { getToken } from "../api/postApi"
import { useNavigate } from "react-router-dom"

import "./style/Login.css"

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {

        event.preventDefault()

        setLoading(true)

        try {
            const res = await getToken({ username, password })
            const data = res.data
            localStorage.setItem('token', data.token)
            navigate("/admin/")
            
        } catch (error) {
            setLoginError(true)
            console.error('Error al iniciar sesión', error)
        }

        setLoading(false)
    }

    return (
            <form className="Login" onSubmit={handleSubmit}>
                <h1>Iniciar Sesión</h1>
                    <input value={username} onChange={ e => setUsername(e.target.value)} type="text" placeholder="Username" />
                    <input value={password} onChange={ e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    {loginError && <span>Usuario o contraseña incorrecta</span>}
                    {loading 
                    ? <Loader />
                    : <Button type={"submit"} variant={"black loading"}>Iniciar Sesión</Button>
                    }
                    
            </form>
    )
}