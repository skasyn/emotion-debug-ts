import "@emotion/react";
import { EmotionTheme } from "../src/styles/theme";

declare module "@emotion/react" {
  //eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends EmotionTheme {}
}
