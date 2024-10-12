
import { ReactNode } from "react"
import styles from "./Button.module.css"

interface ButtonProps {
    /** Required Props **/
    children: ReactNode

    /** Action Props **/
    onClick?: () => void
    type?: "button" | "submit" | "reset"

    /** Styling Props **/
    variant?: "primary" | "primaryIcon" | "secondary" | 
        "secondaryIcon" | "tertiary" | "tertiaryIcon" | 
        "text" | "textIcon"
    icon?: ReactNode
    disabled?: boolean
    length?: "stretch" | "stretchHalf" | "block" | "default"
    size?: "sm" | "lg"

}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type,
    variant = "primary",
    icon,
    disabled,
    length = "stretch",
    size = "lg"

}) => {

    const classNames = [
        styles.button,
        styles[variant],
        icon && styles.icon,
        styles[length],
        styles[size],
        disabled && styles.disabled,
    ].filter(Boolean).join(" ")

    return (
        <button
            className={classNames}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )

}

export default Button
