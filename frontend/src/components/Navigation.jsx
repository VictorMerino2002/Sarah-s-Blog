/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style/Navigation.css"
import { useState } from "react";

export const Navigation = () => {

    const [openNav,setOpenNav] = useState(false)

    const handleClick = () => {
        setOpenNav(!openNav)
    }

    return (
        <nav className={`Navigation ${openNav ? "open" : "close"}`}>
            <button className="open-close-btn" onClick={handleClick}><span className="material-symbols-outlined">menu</span></button>
            <div className={openNav ? "open" : "close"}>
                    <Link to={"/admin"}>About Me</Link>
                    <Link>My Book</Link>
                    <Link to={"/admin/magazines"}>Creative Studio</Link>
                    <Link to={"/admin/tourism"}>Work & Life</Link>
            </div>
        </nav>
    )
}