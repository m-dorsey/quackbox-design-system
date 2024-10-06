
import { ReactNode } from "react"
import styles from "./Button.module.css"

interface ButtonProps {
    /** Required Props **/
    label: string

    /** Action Props **/
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    buttonRole?: "keyboard" | "filter" | "sort"

    /** Styling Props **/
    icon?: ReactNode,
    variant?: "primary" | "secondary"
    width?: "default" | "stretch" | "stretch-half" | "square"
    className?: string

    /** Optional Props **/
    testId?: string
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    disabled = false,
    buttonRole,
    icon,
    variant = "primary",
    width = "stretch",
    testId

}) => {

    const classNames = [
        styles.button,
        styles[variant],
        styles[width],
        buttonRole && styles[buttonRole],
        disabled && styles.disabled,
    ].filter(Boolean).join(" ")

    return (
        <button
            className={classNames}
            onClick={onClick}
            type={type}
            disabled={disabled}
            button-role={buttonRole}
            test-id={testId}
        >
            {
                label.length == 0 ?
                    icon
                :
                    label
            }
        </button>
    )

}

export default Button
