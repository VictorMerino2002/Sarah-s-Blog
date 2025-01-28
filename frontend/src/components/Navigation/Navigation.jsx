/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Navigation.css"
import { useState } from "react";
import { Dropdown } from "./Dropdown";

export const Navigation = () => {

    const [openNav,setOpenNav] = useState(false)

    const handleClick = () => {
        setOpenNav(!openNav)
    }

    const path = window.location.pathname.includes("admin") ? "/admin" : "/"

    return (
        <nav className={`Navigation ${openNav ? "open" : "close"}`}>
            <button className="open-close-btn" onClick={handleClick}><span className="material-symbols-outlined">menu</span></button>
            <div className={openNav ? "open" : "close"}>
                    <Dropdown name={"About Me"}>
                        <Link to={path + "#aboutme"}>About Me</Link>
                        <Link to={path + "#contact"}>Contact</Link>
                    </Dropdown>
                    <Link to={path+ "#creativestudio"}>Creative Studio</Link>
                    <Link to={path + "#mybook"}>My Book</Link>
                    <Dropdown name={"Work and life"}>
                        <Link to={path + "#workandlife"}>Life</Link>
                        <Link to={path + "#journal"}>Work</Link>
                        <Link to={path + "#tourism"}>Tourism</Link>
                    </Dropdown>
            </div>
        </nav>
    )
}