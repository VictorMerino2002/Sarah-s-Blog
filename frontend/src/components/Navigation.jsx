import { Link } from "react-router-dom";
import "./style/Navigation.css"
import { useState } from "react";

export const Navigation = () => {

    const [openNav,setOpenNav] = useState(false)

    const handleClick = () => {
        setOpenNav(!openNav)
    }

    return (
        <nav className="Navigation">
            <button className="open-close-btn" onClick={handleClick}><span className="material-symbols-outlined">menu</span></button>
            <div className={openNav ? "open" : "close"}>
                <Link>Sobre mi</Link>
                <Link>Mi libro</Link>
                <Link to={"/tourism"}>Turismo</Link>
                <Link>Trabajo y vida</Link>
                <Link>Estudio</Link>
            </div>
        </nav>
    )
}