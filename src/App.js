import React from 'react';
import Home from "pages/Home/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  blue: "#0b5394"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
