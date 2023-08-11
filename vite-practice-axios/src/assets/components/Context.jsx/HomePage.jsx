// HomePage.js
import { useContext } from 'react';
import { ThemeContext } from './Setup';

const HomePage = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const onClick = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <div onClick={onClick} style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}>
            <p>hello</p>
        </div>
    );
};

export default HomePage;
