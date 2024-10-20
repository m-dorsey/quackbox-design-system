
import { FC, useContext } from "react"
import { NavigationContext } from "../../contexts/NavigationContext"
import { NavigationLogoProps } from "./Navigation.types"
import Header from "../Text/Header"
import styles from "./Navigation.module.css"

const NavigationLogo: FC<NavigationLogoProps> = ({
    onLogoClick,

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
    flexDirection,
    justifyContent,
    alignItems,
    dataTestId

}) => {

    const context = useContext(NavigationContext)
    if (!context) {
        throw new Error("<NavigationLogo /> must be used within a <Navigation> tag.")
    }

    const classNames = [
        className,
        styles.navigationLogo
    ].filter(Boolean).join(" ")

    return (
        <figure
            className={classNames}
            onClick={onLogoClick}
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
                flexDirection: flexDirection,
                justifyContent: justifyContent,
                alignItems: alignItems

            }}
        >
            
            <img className={styles.logo} src="src/assets/duck.png"/>
            <Header 
                className={styles.logoText}
                weight="bold"
            >
                QuackBox
            </Header>
            
        </figure>
    )
}

export default NavigationLogo
