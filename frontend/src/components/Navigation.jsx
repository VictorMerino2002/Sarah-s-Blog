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
                    <Link to={"/admin"}>Home</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab2" ? "active-tab tab" : "tab"}>
                    <Link>About Me</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab3" ? "active-tab tab" : "tab"}>
                    <Link>My Book</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab4" ? "active-tab tab" : "tab"}>
                    <Link to={"/admin/tourism"}>Turism</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab5" ? "active-tab tab" : "tab"}>
                    <Link>Work & Life</Link>
                    <span></span>
                </div>
                <div className={ activeTab == "tab6" ? "active-tab tab" : "tab"}>
                    <Link to={"/admin/magazines"}>Studio</Link>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}