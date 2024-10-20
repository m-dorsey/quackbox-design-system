
import { FC, useContext } from "react"
import { NavigationContext } from "../../contexts/NavigationContext"
import { NavigationFilterProps } from "./Navigation.types"
import { ListFilter } from "lucide-react"
import Button from "../Button/Button"
import styles from "./Navigation.module.css"

const NavigationFilter: FC<NavigationFilterProps> = ({
    onFilterClick,
    iconSize,

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
        throw new Error("<NavigationFilter /> must be used within a <Navigation> tag.")
    }

    const classNames = [
        className,
        styles.navigationFilter
    ].filter(Boolean).join(" ")

    return (
        <Button
            className={classNames}
            variant="secondary"
            length="block"
            onClick={onFilterClick}
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
            <ListFilter size={iconSize} />
        </Button>
    )
}

export default NavigationFilter
