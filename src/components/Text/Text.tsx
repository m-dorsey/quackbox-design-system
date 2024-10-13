
import { ReactNode } from "react"
import { UniversalProps } from "../../types/universalProps"
import styles from "../../styles/text.module.css"

interface TextProps extends UniversalProps {
    // Required Props
    children: ReactNode
    
    // Styling Props
    size?: "xsm" | "sm" | "md" | "lg"
    weight?: "light" | "normal" | "bold"
    
}

const Text: React.FC<TextProps> = ({
    children,
    size = "sm",
    weight = "normal",
    
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
        styles.text,
        styles[weight],
        styles[size]
    ].filter(Boolean).join(" ")

    return (
        <p 
            className={classNames}
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
        </p>
    )

}

export default Text
