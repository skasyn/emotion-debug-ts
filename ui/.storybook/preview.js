import "../styles.css";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-emotion-theme";
import { defaultTheme } from "../src/styles/theme";

const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
