import { style } from "@vanilla-extract/css";

import { theme } from "../../../styles/theme/theme.css";

export const buttonTextStyle = style({
  fontFamily: theme.fonts.primary,
  fontWeight: "400",
});
