
import { FC, useContext } from "react"
import { NavigationContext } from "../../contexts/NavigationContext"
import { NavigationSearchProps } from "./Navigation.types"
import SearchBar from "../SearchBar/SearchBar"
import NavigationFilter from "./NavigationFilter"
import NavigationSort from "./NavigationSort"
import styles from "./Navigation.module.css"

const NavigationSearch: FC<NavigationSearchProps> = ({
    onSearchClick,
    onFilterClick,
    onSortClick,
    showOptions = true,
    iconSize = 30,

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
        throw new Error("<NavigationSearch /> must be used within a <Navigation> tag.")
    }

    const classNames = [
        className,
        styles.navigationSearch
    ].filter(Boolean).join(" ")

    return (
        <section className={styles.navigationSearchContainer}>

            <SearchBar
                className={classNames}
                onClick={onSearchClick}
                placeholder="Search"
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

            </SearchBar>
            {showOptions &&
                <>
                    <NavigationFilter 
                        onFilterClick={onFilterClick} 
                        iconSize={iconSize}
                        data-test-id={`${dataTestId}-filter`} 
                    />
                    <NavigationSort 
                        onSortClick={onSortClick}
                        iconSize={iconSize}
                        data-test-id={`${dataTestId}-sort`}
                    />
                </>
            }

        </section>
    )
}

export default NavigationSearch
