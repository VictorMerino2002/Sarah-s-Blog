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

    return (
        <nav className={`Navigation ${openNav ? "open" : "close"}`}>
            <button className="open-close-btn" onClick={handleClick}><span className="material-symbols-outlined">menu</span></button>
            <div className={openNav ? "open" : "close"}>
                    <Dropdown name={"About Me"}>
                        <Link>Contact</Link>
                    </Dropdown>
                    <Link to={"/admin#mybook"}>My Book</Link>
                    <Link to={"/admin#creativestudio"}>Creative Studio</Link>
                    <Dropdown name={"Work and life"}>
                        <Link to={"/admin"}>Life</Link>
                        <Link to={"/admin"}>Work</Link>
                        <Link to={"/admin"}>Tourism</Link>
                    </Dropdown>
            </div>
        </nav>
    )
}