import React, {createContext, useState} from 'react';
export const ThemeContext = createContext(null);

const ThemeContextProvider = ({children}) => {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`${isDark}`}>
            <ThemeContext.Provider value={{isDark: isDark, setIsDark: setIsDark}}>
                {children}
            </ThemeContext.Provider>

        </div>
    );
};

export default ThemeContextProvider;