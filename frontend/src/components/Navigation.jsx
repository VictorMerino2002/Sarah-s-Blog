/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style/Navigation.css"
import { useState } from "react";

export const Navigation = ({activeTab}) => {

    const [openNav,setOpenNav] = useState(false)

    const handleClick = () => {
        setOpenNav(!openNav)
    }

    return (
        <nav className="Navigation">
            <button className="open-close-btn" onClick={handleClick}><span className="material-symbols-outlined">menu</span></button>
            <div className={openNav ? "open" : "close"}>
                <div className={ activeTab == "tab1" ? "active-tab tab" : "tab"}>
                    <Link>Sobre mi</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab2" ? "active-tab tab" : "tab"}>
                    <Link>Mi libro</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab3" ? "active-tab tab" : "tab"}>
                    <Link to={"/tourism"}>Turismo</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab4" ? "active-tab tab" : "tab"}>
                    <Link>Trabajo y vida</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab5" ? "active-tab tab" : "tab"}>
                    <Link>Estudio</Link>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}