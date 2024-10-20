
import { FC } from "react"
import { NavigationProvider } from "../../contexts/NavigationContext"
import { NavigationProps } from "./Navigation.types"
import styles from "./Navigation.module.css"

const Navigation: FC<NavigationProps> = ({
    children,

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

    const classNames = [
        className,
        styles.navigation
    ].filter(Boolean).join(" ")

    return (
        <NavigationProvider>

            <nav
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
                    flexDirection: flexDirection,
                    justifyContent: justifyContent,
                    alignItems: alignItems

                }}
            >
                {children}
            </nav>

        </NavigationProvider>
    )
}

export default Navigation
