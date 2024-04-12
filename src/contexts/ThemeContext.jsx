import { useContext, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    let mode = localStorage.getItem('dark');
    return mode ? JSON.parse(mode) : false;
  });
  const theme = isDark ? 'bg-[#121212] text-gray-400' : 'bg-white text-gray-700';
  const ui = isDark ? 'bg-[#181818]' : 'bg-[#F5F5F5]';
  const border = isDark ? 'border-[#282828]' : 'border-gray-300';
  const setTheme = (data) =>{
    if(data === 'light'){
      localStorage.removeItem('dark');
      setIsDark(false);
    }
    else{
      localStorage.setItem('dark', JSON.stringify(true));
      setIsDark(true);
    }
  }
  const contextData = {
    theme,
    ui,
    border,
    isDark,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={contextData} >
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);