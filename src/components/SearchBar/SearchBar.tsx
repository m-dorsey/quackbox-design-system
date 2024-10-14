
import { UniversalProps } from "../../types/universalProps"
import styles from "./SearchBar.module.css"

interface SearchBarProps extends UniversalProps {
    // Required Props
    placeholder: string

    // Action Props
    onClick?: () => void
    onChange?: () => void
    
    // Styling Props
    readonly?: boolean
    
    // Input Props
    value?: string
    maxLength?: number

}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder="Search",
    onClick,
    onChange,
    value,
    maxLength = 20,

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
        styles.searchBar
    ].filter(Boolean).join(" ")

    return (
        <input
            className={classNames}
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
            value={value}
            maxLength={maxLength}

            type="search"
            autoComplete="off"
            defaultValue=""
            readOnly
            autoFocus={false}
            
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

        />   
    )

}

export default SearchBar
