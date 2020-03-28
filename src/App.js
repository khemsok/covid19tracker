import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import GlobalOverview from "./components/GlobalOverview";
import TopAffected from "./components/TopAffected";
import Timeline from "./components/Timeline";
import HowYouCanHelp from "./components/HowYouCanHelp";
import Footer from "./components/Footer";
import { lightTheme, darkTheme } from "./util/themeFile";

import CssBaseline from "@material-ui/core/CssBaseline";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

function App() {
  const light = createMuiTheme(lightTheme);
  const dark = createMuiTheme(darkTheme);
  const [themeSelector, setThemeSelector] = useState("light");

  const handleThemeChange = () => {
    setThemeSelector(themeSelector === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={themeSelector === "light" ? light : dark}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar themeChange={handleThemeChange} mode={themeSelector} />
        <GlobalOverview />
        <TopAffected />
        <Timeline />
        <HowYouCanHelp />
        <Footer theme={themeSelector} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
