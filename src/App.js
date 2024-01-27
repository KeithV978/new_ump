import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes.js";
import theme from "./assets/theme.js";


// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import IndexRouter from "./routes";
import { Loader } from "./components/loader/index.jsx";


function App({ store, persistor }) {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Provider store={store}>
          <CssBaseline />
          <PersistGate loading={<Loader />} persistor={persistor}>
              <IndexRouter />
          </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
