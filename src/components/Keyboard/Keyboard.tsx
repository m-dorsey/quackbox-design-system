
import { Key, KeyboardProps } from "./Keyboard.types"
import KeyboardRow from "./KeyboardRow"
import KeyboardKey from "./KeyboardKey"
import styles from "./Keyboard.module.css"

const keyboardLayout: Key[][] = [
    [
        {label: "1"}, {label: "2"}, {label: "3"}, {label: "4"}, 
        {label: "5"}, {label: "6"}, {label: "7"}, {label: "8"}, 
        {label: "9"}, {label: "0"}
    ],
    [
        {label: "Q"}, {label: "W"}, {label: "E"}, {label: "R"}, 
        {label: "T"}, {label: "Y"}, {label: "U"}, {label: "I"}, 
        {label: "O"}, {label: "P"}
    ],
    [
        {label: "A"}, {label: "S"}, {label: "D"}, {label: "F"}, 
        {label: "G"}, {label: "H"}, {label: "J"}, {label: "K"}, 
        {label: "L"}, {label: "\'"}
    ],
    [
        {label: ":"}, {label: "Z"}, {label: "X"}, {label: "C"}, 
        {label: "V"}, {label: "B"}, {label: "N"}, {label: "M"}, 
        {label: "\""}, {label: "delete"}
    ],
    [
        {label: "&"}, {label: "-"}, {label: "_"}, {label: "space", span: 3}, 
        {label: ","}, {label: "."}, {label: "clear", span: 2} 
    ]
]

const Keyboard: React.FC<KeyboardProps> = ({
    onKeyPress = () => {},

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
        styles.keyboard
    ].filter(Boolean).join(" ")

    return (
        <section
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

            {keyboardLayout.map((row, rowIndex) => (
                <KeyboardRow key={rowIndex} dataTestId={`${dataTestId}-keyboard-row-${rowIndex}`}>
                    {row.map((key, keyIndex) => (
                        <KeyboardKey
                            key={keyIndex}
                            label={key.label}
                            span={key.span}
                            onKeyPress={onKeyPress}
                            dataTestId={`${dataTestId}-keyboard-key-${key}`}
                        />
                    ))}
                </KeyboardRow>
            ))}
            
        </section>   
    )

}

export default Keyboard
