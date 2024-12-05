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

    return (
        <section ref={dropdownRef} className="Dropdown">
            <button onClick={() => setShowChildren(!showChildren)}>
                {name}
                <span class="material-symbols-outlined">
                    {showChildren ? "arrow_drop_up" : "arrow_drop_down"}
                </span>
            </button>   
            <div style={{height: showChildren ? "max-content" : "0px"}} className={dropdownClassName}>
                {children}
            </div>
        </section>
    )
}