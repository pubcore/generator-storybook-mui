import React from "react";
import { StylesProvider } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "./_theme";
import { CssBaseline } from "@material-ui/core";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ThemeProvider } from "styled-components";

export const AppDecorator = ({
  i18nConfig = {},
  text = {
    en: {
      translation: { name: "This is a long name text." },
    },
  },
}) => {
  i18n.use(initReactI18next).init({
    ...{
      resources: text,
      fallbackLng: "en",
      debug: false,
      lng: "en",
      keySeparator: false,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      parseMissingKeyHandler: (key) =>
        (key[0].toUpperCase() + key.slice(1)).replace(/_/, " "),
      react: {
        bindI18n: false,
        transSupportBasicHtmlNodes: false,
        useSuspense: false,
      },
    },
    ...i18nConfig,
  });

  return function decorator(Application) {
    var darkMode = useMediaQuery("(prefers-color-scheme: dark)"),
      theme = React.useMemo(() => createTheme({ darkMode }), [darkMode]);

    return (
      <StylesProvider injectFirst>
        <MuiThemeProvider {...{ theme }}>
          <ThemeProvider {...{ theme }}>
            <CssBaseline />
            {<Application />}
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    );
  };
};
