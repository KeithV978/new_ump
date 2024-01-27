import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import theme from "./Assets/theme.js";
import "./App.css";

import Box from "@mui/material/Box";

// Components
import { Loader as PageLoader } from "./Components/index.js";

import PropType from "prop-types";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import IndexRouter from "./routers/index.jsx";

function App({ store, persistor }) {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Provider store={store}>
        <Box>
          <CssBaseline />
          <PersistGate loading={<PageLoader />} persistor={persistor}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <IndexRouter />
            </LocalizationProvider>
          </PersistGate>
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

App.propTypes = {
  store: PropType.any.isRequired,
  persistor: PropType.any.isRequired,
};

export default App;
