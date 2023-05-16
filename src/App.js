import Routing from "./routes/Routing";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#935be3",
      second:"#ae84ea"
    },
    secondary: {
      main: "#c9adf1",
      second: "#faf7fe"
    },
    info: {
      main: "#a1a1a1",
      second: "#f7f7f7"
    },
  },
  transitions: {
    duration: {
        enteringScreen: 500,
        leavingScreen: 500,
    }
}
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routing />
      </div>
    </ThemeProvider>
  );
}

export default App;
