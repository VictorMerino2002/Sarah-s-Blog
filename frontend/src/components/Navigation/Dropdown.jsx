/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react"

export const Dropdown = ({name, children}) => {

    const [showChildren, setShowChildren] = useState(false)
    const dropdownRef = useRef(null)

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowChildren(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => document.removeEventListener("mousedown", handleClickOutside)
    },[])

    const dropdownClassName = "link-container-" + (showChildren ? "open" : "close")
    const dropdownHeight = (React.Children.count(children) * 78) + 20 + 'px'

    return (
        <section ref={dropdownRef} className="Dropdown">
            <button onClick={() => setShowChildren(!showChildren)}>
                {name}
                <span className="material-symbols-outlined">
                    {showChildren ? "arrow_drop_up" : "arrow_drop_down"}
                </span>
            </button>   
            <div style={{height: showChildren ? dropdownHeight : "0px"}} className={dropdownClassName}>
                {children}
            </div>
        </section>
    )
}