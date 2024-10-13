
import { ReactNode } from "react"
import { UniversalProps } from "../../types/universalProps"
import styles from "./Button.module.css"

interface ButtonProps extends UniversalProps {
    // Required Props
    children: ReactNode

    // Action Props
    onClick?: () => void
    type?: "button" | "submit" | "reset"

    // Styling Props
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
    size = "lg",

    // Universal Props
    className,
    style,
    width,
    height,
    borderRadius,
    border,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    dataTestId

}) => {

    const classNames = [
        className,
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
            data-test-id={dataTestId}
            
            style={{
                ...style,
                width: width,
                height: height,
                borderRadius: borderRadius,
                border: border,
                margin: margin,
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginTop: marginTop,
                marginBottom: marginBottom,
                padding: padding,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,

            }}
            
        >
            {children}
        </button>
    )

}

export default Button
