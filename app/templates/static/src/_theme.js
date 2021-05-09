import { createMuiTheme } from "@material-ui/core/styles";
export const createTheme = ({ darkMode }) =>
  createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      type: darkMode ? "dark" : "light",
    },
    props: {
      MuiButton: {
        variant: "outlined",
      },
    },
  });
