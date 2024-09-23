import { Link } from "react-router-dom";
import "./Navigation.css"

export const Navigation = () => {
    return (
        <nav className="Navigation">
            <Link>Sobre mi</Link>
            <Link>Mi libro</Link>
            <Link to={"/tourism"}>Turismo</Link>
            <Link>Trabajo y vida</Link>
            <Link>Estudio</Link>
        </nav>
    )
}