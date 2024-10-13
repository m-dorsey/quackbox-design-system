
import { ReactNode } from "react"
import { UniversalProps } from "../../types/universalProps"
import styles from "../../styles/text.module.css"

interface HeaderProps extends UniversalProps {
    // Required Props
    children: ReactNode
    
    // Styling Props
    variant?: "h1" | "h2"
    weight?: "light" | "normal" | "bold"
    size?: "xsm" | "sm" | "md" | "lg"

}

const Header: React.FC<HeaderProps> = ({
    children,
    variant = "h1",
    weight = "normal",
    size,
    
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
        styles.header,
        styles[weight]
    ].filter(Boolean).join(" ")

    const defaultSize = size ? size : (variant=="h1") ? "lg" : "md"

    if (variant.includes("h2")) {
        return (
            <h2 
                className={`${classNames} ${styles[defaultSize]}`}
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
            </h2>
        )
    }

    return (
        <h1 
            className={`${classNames} ${styles[defaultSize]}`}
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
        </h1>
    )

}

export default Header
