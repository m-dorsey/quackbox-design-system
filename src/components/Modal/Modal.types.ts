
import { ReactNode } from "react"
import { UniversalProps } from "../../types/universalProps"

export interface ModalProps extends UniversalProps {
    // Required Props
    children: ReactNode
    isOpen: true | false

    // Action Props
    onClose?: () => void

}

export interface ModalHeaderProps extends UniversalProps {
    // Required Props
    children: ReactNode

}

export interface ModalContentProps extends UniversalProps {
    // Required Props
    children: ReactNode

}

export interface ModalFooterProps extends UniversalProps {
    // Required Props
    children: ReactNode

}
