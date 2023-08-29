import { createContext, useState } from "react"

const LanguageChange = createContext()

const LanguageContext = ({ children }) => {
    const [language, setLanguage] = useState('en')
    return (
        <LanguageChange.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageChange.Provider>
    )
}

export { LanguageContext, LanguageChange }
