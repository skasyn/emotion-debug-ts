import { ThemeProvider } from "@emotion/react";
import { defaultTheme, EmotionTheme } from "./styles/theme";
import React from "react";

export const UiThemeProviderWithDefaultTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

interface UiThemeProviderProps {
  theme: EmotionTheme;
  children: React.ReactNode;
}

export const UiThemeProvider = ({ theme, children }: UiThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
