
import React, { createContext } from 'react'
import { NavigationProps } from '../components/Navigation/Navigation.types'

interface NavigationContextProps {
    hasNavigation: boolean
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(undefined)

export const NavigationProvider: React.FC<NavigationProps> = ({ children }) => {

    return (
        <NavigationContext.Provider value={{hasNavigation: true}}>
            {children}
        </NavigationContext.Provider>
    )
}
