import { Platform } from "react-native";

const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#f8f9fa",
    text: "#212529",
  },
  fonts: {
    regular: Platform.select({
      ios: "Arial",
      android: "Roboto",
    }),
    bold: Platform.select({
      ios: "Arial",
      android: "Roboto",
    }),
  },
};

export default theme;
