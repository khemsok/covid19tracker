export const lightTheme = {
  palette: {
    type: "light",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#000000",
      light: "#ffffff",
      dark: "#000000"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: "Roboto Condensed, sans-serif, Roboto Mono, monospace",
    caption: {
      fontFamily: "Roboto Mono, monospace",
      fontSize: 15
    },
    h5: {
      fontWeight: 700
    },
    subtitle1: {
      fontWeight: 100,
      fontFamily: "Roboto Mono, monospace"
    },
    h2: {
      fontFamily: "Roboto Mono, monospace",
      fontWeight: 700
    }
  }
};

export const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#000000",
      light: "#ffffff",
      dark: "#000000"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: "Roboto Condensed, sans-serif, Roboto Mono, monospace",
    caption: {
      fontFamily: "Roboto Mono, monospace",
      fontSize: 15
    },
    h5: {
      fontWeight: 700
    },
    subtitle1: {
      fontWeight: 100,
      fontFamily: "Roboto Mono, monospace"
    },
    h2: {
      fontFamily: "Roboto Mono, monospace",
      fontWeight: 700
    }
  }
};
