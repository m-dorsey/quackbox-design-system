
// import Button from "../Button/Button"
import { ReactNode } from "react"
import styles from "./Modal.module.css"
import Heading from "../Text/Heading"
import Button from "../Button/Button"

interface ModalProps {
    /** Required Props **/
    children: ReactNode
    isOpen: true | false

    /** Action Props **/
    onClose?: () => void
    
    /** Styling Props **/
    width?: string
    height?: string
    borderRadius?: string
    border?: string

}

const Modal: React.FC<ModalProps> = ({
    children,
    isOpen = false,
    onClose,
    width,
    height,
    borderRadius,
    border

}) => {

    const classNames = [
        styles.modal,
        onClose
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
                    style={{
                        width: width,
                        height: height,
                        borderRadius: borderRadius,
                        border: border
                    }}
                >
                    {onClose && 
                        <Button
                            label="x"
                            width="square"
                            onClick={onClose}
                        ></Button>
                    }

                    <section className={styles.modalContent}>
                        {children}
                    </section>

                </dialog>}

        </div>
        
    )

}

export default Modal
