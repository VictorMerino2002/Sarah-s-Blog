import { useState } from "react"
import { Button } from "../components/Button"

export const Subscription = () => {

    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMsg("")

        try {
            const response = await fetch('http://localhost:8000/sub/add/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
              setMsg(data.message);
            } else {
              setMsg(data.message || 'Error al suscribirse.');
            }
        } catch (error) {
            setMsg('Ocurrió un error al conectarse con el servidor.');
        }
    }

    return (
        <main>
            <form className="Login" onSubmit={handleSubmit}>
                <h1>Subscribe</h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                <Button variant={"main"}>Subscribe</Button>
            </form>
            {msg && <p>{msg}</p>}
        </main>
    )
}