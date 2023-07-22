import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { Theme } from "tamagui";

type Theme = "dark" | "light";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (_theme: Theme) => { }
})

export const ThemeProvider = ({ children }: any) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme || "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Theme name={theme === "dark" ? "dark_pink" : "light_pink"}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
