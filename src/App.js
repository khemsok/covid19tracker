import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import GlobalOverview from "./components/GlobalOverview";
import TopAffected from "./components/TopAffected";
import Footer from "./components/Footer";
import themeFile from "./util/themeFile";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Navbar />
        <GlobalOverview />
        <TopAffected />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
