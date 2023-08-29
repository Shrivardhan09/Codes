import { useContext } from "react"
import { ThemeProvider } from './ContextHoc'
import { LanguageChange } from "./LanguageContext"

const Theme = () => {
    const { theme, setTheme } = useContext(ThemeProvider)
    const { language, setLanguage } = useContext(LanguageChange)
    // console.log(language)

    const clickMe = () => {
        theme === 'light' ? (setTheme('dark')) : (setTheme('light'))
    }
    const onLangChnge = (lang) => {
        setLanguage(lang)
    }
    const getTextForLanguage = () => {
        switch (language) {
            case 'te':
                return 'హే ఇది థీమ్ కోసం మాత్రమే సందర్భం API పరీక్ష';
            case 'fr':
                return "hé c'est le test de l'api de contexte uniquement pour le thème";
            case 'en':
                return "hey this the context api testing only for theme";
            default:
                return 'Hey, this is theme testing only';
        }
    };

    return (
        <div>
            <div style={{ backgroundColor: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black' }} onClick={clickMe} >
                {getTextForLanguage()}
            </div>

            <button onClick={() => onLangChnge('te')}>Telugu</button>
            <button onClick={() => onLangChnge('fr')}>French</button>
            <button onClick={() => onLangChnge('en')}>English</button>
        </div>
    )
}

export default Theme
