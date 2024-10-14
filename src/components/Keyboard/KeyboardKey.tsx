
import { KeyboardKeyProps } from "./Keyboard.types"
import Button from "../Button/Button"
import styles from "./Keyboard.module.css"

const KeyboardKey: React.FC<KeyboardKeyProps> = ({
    label,
    onKeyPress = () => {},
    span=1,
    icon,

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
        styles.keyboardKey,
        styles["span" + span]
    ].filter(Boolean).join(" ")

    if (label == "delete") {
        icon = <p className={styles.deleteKey}>&times;</p>
    }

    return (
        <Button
            className={classNames}
            variant={label=="delete" ? "secondaryIcon" : "secondary"}
            length={span ? "stretch" : "block"}
            onClick={() => onKeyPress(label)}
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
                alignItems: alignItems,

            }}

        >

            {label != "delete" ?
                label : icon
            }

        </Button>   
    )

}

export default KeyboardKey
