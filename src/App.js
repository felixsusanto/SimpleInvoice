import React from 'react';
// import Home from "pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import Routes from './routes';

const theme = {
  blue: "#0b5394"
};


const App = ({history}) => {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  );
}
 
export default App;
