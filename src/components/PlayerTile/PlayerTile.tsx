
import { UniversalProps } from "../../types/universalProps"
import Button from "../Button/Button"
import styles from "./PlayerTile.module.css"

interface PlayerTileProps extends UniversalProps {
    // Required Props
    playerNumber: number
    isConnected: boolean

    // Action Props
    onClick?: () => void
    
    // Styling Props
    iconPath?: string

}

const PlayerTile: React.FC<PlayerTileProps> = ({
    playerNumber,
    isConnected = false,
    onClick,
    iconPath="src/assets/duckConnected.png",

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
        styles.playerTile
    ].filter(Boolean).join(" ")

    return (
        <figure
            className={`${className} ${styles.playerContainer}`}
            is-connected={isConnected}
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
            <img className={`${classNames} ${isConnected && styles.isConnected}`} 
                src={isConnected && iconPath || ""}
            />

            <Button
                className={`${styles.playerLabel} ${isConnected && styles.isConnected}`}
                variant="secondary"
                onClick={onClick}
                data-test-id={`${dataTestId}-player-${playerNumber}-button`}
            >
                Player {playerNumber}
            </Button>

        </figure>
    )

}

export default PlayerTile
