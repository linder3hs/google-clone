import Router from "./router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default App;
