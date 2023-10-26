import "styled-components";
import { Theme, ThemeColor } from "./theme";

declare module "styled-components" {
  type ThemeType = typeof Theme;
  export interface DefaultTheme extends ThemeType {}
}
