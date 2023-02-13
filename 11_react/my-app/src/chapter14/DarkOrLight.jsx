import { useState } from "react";
import MainContent from "./MainContent";
import ThemeContext from "./ThemeContext";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

function DarkOrLight() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (  
    // ThemeContext의 값을 하위 컴포넌트들이 쓸 수 있게끔 broadcast 해줌
    <ThemeContext.Provider value={{ theme, toggleTheme }} >    {/* theme: theme, toggleTheme: toggleTheme key값과 value값이 같을 경우 { theme, toggleTheme }로 단순히 쓸 수 있다. */}
      {/* {console.log(theme)}
      {console.log(toggleTheme)} */}
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;