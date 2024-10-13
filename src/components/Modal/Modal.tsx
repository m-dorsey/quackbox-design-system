
import { ModalProps } from "./Modal.types"
import Button from "../Button/Button"
import styles from "./Modal.module.css"

const Modal: React.FC<ModalProps> = ({
    children,
    isOpen = false,
    onClose,

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
        styles.modal
    ].filter(Boolean).join(" ")

    if (!open) return null

    return (
        <div 
            className={isOpen ? styles.modalOverlay : undefined}
        >
            
            {isOpen && 
                <dialog 
                    className={classNames}
                    open={isOpen}
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
                    {onClose && 
                        <Button
                            className={styles.onClose}
                            variant="textIcon"
                            length="block"
                            onClick={onClose}
                            dataTestId={`${dataTestId}-close-button`}
                        >
                            &times;
                        </Button>
                    }

                    {children}

                </dialog>
            }
        </div>
    )

}

export default Modal
