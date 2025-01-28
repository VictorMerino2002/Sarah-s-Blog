import { useState } from "react"
import { Button } from "../components/Button"

export const Unsubsribe = () => {
    
    const [email, setEmail] = useState("")

    const [message, setMessage] = useState('')
    const handleDelete = async (e) => {
        e.preventDefault()
        
        try {
        const response = await fetch(`http://localhost:8000/sub/delete/${email}/`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            const data = await response.json()
            setMessage(data)
        } else {
            setMessage('Error deleting subscription')
        }
        } catch (error) {
        console.error('Error:', error)
        setMessage('There was a problem connecting to the server')
        }
    }

    return (
        <main>
            <form className="Login" onSubmit={handleDelete}>
                <h1>Unsubscribe</h1>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Button variant={"main"}>Unsubscribe</Button>
            </form>
            {message && <p>{message}</p>}
        </main>
    )
}
