
import { ReactNode } from "react"
import { UniversalProps } from "../../types/universalProps"
import Button from "../Button/Button"
import styles from "./Modal.module.css"

interface ModalProps extends UniversalProps {
    // Required Props
    children: ReactNode
    isOpen: true | false

    // Action Props
    onClose?: () => void
    
    // Styling Props
    width?: string
    height?: string
    borderRadius?: string
    border?: string

}

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

                    }}
                >

                    {onClose && 
                        <Button
                            className={styles.onClose}
                            variant="textIcon"
                            length="block"
                            onClick={onClose}
                        >&times;</Button>
                    }

                    <section className={styles.modalContent}>
                        {children}
                    </section>

                </dialog>}
        </div>
    )

}

export default Modal
