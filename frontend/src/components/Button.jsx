/* eslint-disable react/prop-types */
import "./style/Button.css"

export const Button = ({ children, handleClick, variant, type}) => {
    return (
        <button type={type} className={"Button " + variant} onClick={handleClick}>{children}</button>
    )
}