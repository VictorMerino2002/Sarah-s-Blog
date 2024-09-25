/* eslint-disable react/prop-types */
import "./style/Button.css"

export const Button = ({ children, handleClick, variant}) => {
    return (
        <button className={"Button " + variant} onClick={handleClick}>{children}</button>
    )
}