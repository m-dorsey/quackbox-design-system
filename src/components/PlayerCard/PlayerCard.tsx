
import Button from "../Button/Button"
import styles from "./PlayerCard.module.css"

interface PlayerCardProps {
    /** Required Props **/
    playerNumber: number
    isConnected: boolean

    /** Action Props **/
    onClick?: () => void
    
    /** Styling Props **/
    iconPath?: string,

    /** Optional Props **/
    testId?: string
}

const PlayerCard: React.FC<PlayerCardProps> = ({
    playerNumber,
    onClick,
    isConnected=false,
    iconPath="src/assets/duckConnected.png",
    testId

}) => {

    const classNames = [
        styles.playerCard,
        isConnected && styles.isConnected
    ].filter(Boolean).join(" ")

    return (
        <section
            className={classNames}
            onClick={onClick}
            is-connected={isConnected || false}
            test-id={testId}
        >
            <img 
                className={styles.playerIcon} 
                src={isConnected && iconPath || ""}
            />
            <Button
                className={styles.playerLabel}
                label={`Player ${playerNumber}`}
                variant={isConnected ? "secondary" : undefined}
                box-shadow={isConnected || false}
            />
        </section>
    )

}

export default PlayerCard
