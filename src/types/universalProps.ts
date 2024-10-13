
import { CSSProperties } from "react"

export interface UniversalProps {
    className?: string
    style?: CSSProperties
    
    width?: string
    height?: string
    borderRadius?: string
    border?: string

    margin?: string
    marginLeft?: string
    marginRight?: string
    marginTop?: string
    marginBottom?: string
    
    padding?: string
    paddingLeft?: string
    paddingRight?: string
    paddingTop?: string
    paddingBottom?: string

    dataTestId?: string
}
