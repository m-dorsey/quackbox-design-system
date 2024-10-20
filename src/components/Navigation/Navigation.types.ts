
import { ReactNode } from "react"
import { UniversalProps } from "../../types/universalProps"

export interface NavigationProps extends UniversalProps {
    // Required Props
    children: ReactNode
}

export interface NavigationLogoProps extends UniversalProps {
    // Action Props
    onLogoClick?: () => void
}

export interface NavigationSearchProps extends UniversalProps {
    // Required Action Props
    onSearchClick: () => void
    onFilterClick?: () => void
    onSortClick?: () => void

    // Styling Props
    showOptions?: boolean
    iconSize?: number
}

export interface NavigationFilterProps extends UniversalProps {
    // Required Props
    onFilterClick?: () => void

    // Styling Props
    iconSize?: number
}

export interface NavigationSortProps extends UniversalProps {
    // Required Props
    onSortClick?: () => void

    // Styling Props
    iconSize?: number
}

export interface NavigationMenuProps extends UniversalProps {
    // Required Props
    onMenuClick: () => void

    // Styling Props
    iconSize?: number
}
