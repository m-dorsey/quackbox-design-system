
import { ReactNode } from "react"
import { UniversalProps } from "../../types/universalProps"

export interface KeyboardProps extends UniversalProps {
    // Action Props
    onKeyPress?: (key: string) => void

}

export interface KeyboardRowProps extends UniversalProps {
    // Required Props
    children: ReactNode

}

export interface Key {
    // Required Props
    label: string

    // Styling Props
    span?: number
    icon?: ReactNode
    
}

export interface KeyboardKeyProps extends UniversalProps {
    // Required Props
    label: string

    // Action Props
    onKeyPress: (key: string) => void
    
    // Styling Props
    span?: number
    icon?: ReactNode

}
