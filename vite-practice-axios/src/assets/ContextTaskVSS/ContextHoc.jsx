import React, { Children, createContext, useState } from 'react'

const ThemeProvider = createContext()

const ContextHoc = ({ children }) => {
    const [theme, setTheme] = useState('')
    return (
        <ThemeProvider.Provider value={{ theme, setTheme }} >
            {children}
        </ThemeProvider.Provider>
    )
}

export { ContextHoc, ThemeProvider }
