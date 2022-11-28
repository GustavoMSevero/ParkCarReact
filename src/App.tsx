import "./App.css";

import Routes from "./routes";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import AppProvider from "./context";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <RouterProvider router={Routes} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
