import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeStore = createContext();

const ThemeContext = ({ children }) => {
    const [themeName, setThemeName] = useState('light');

    const toggleTheme = () => {
        setThemeName((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeName);
    }, [themeName]);

    return (
        <ThemeStore.Provider value={{ themeName, toggleTheme }}>
            {children}
        </ThemeStore.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeStore);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext;





// ThemeContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeStore = createContext();

// export const useTheme = () => {
//     const context = useContext(ThemeStore);
//     if (!context) {
//         throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;
// };

// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light');

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//     };

//     useEffect(() => {
//         document.documentElement.setAttribute('data-theme', theme);
//     }, [theme]);

//     return (
//         <ThemeStore.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeStore.Provider>
//     );
// };

