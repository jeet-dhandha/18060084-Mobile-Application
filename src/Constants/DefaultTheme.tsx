import color from "color";
import { black, grey400, grey900, pinkA400, white } from "./colors";

export default {
  roundness: {
    round: 100,
  },
  borderWidth: {
    slim: 0.5,
    bordered: 1,
  },
  colors: {
    primary: "#332AD5",
    accent: black,
    background: "#f6f6f6",
    surface: white,
    error: "#B00020",
    text: black,
    onSurface: "#000000",
    disabled: color(black).alpha(0.26).rgb().string(),
    iconDefault: grey900,
    borderColor: grey400,
    placeholder: color(black).alpha(0.54).rgb().string(),
    backdrop: color(black).alpha(0.5).rgb().string(),
    notification: pinkA400,
  },
  animation: {
    scale: 1.0,
  },
  textSize: {
    small: 12,
    medium: 14,
    large: 16,
  },
  padding: {
    extra_small: 2.5,
    small: 5,
    medium: 7.5,
    large: 10,
    extra_large: 15,
  },
};
