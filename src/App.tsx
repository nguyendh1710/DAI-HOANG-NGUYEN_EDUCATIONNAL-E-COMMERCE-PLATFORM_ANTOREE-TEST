import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./componets/theme";
import "./App.css";
import TodoList from "./../src/modules/TodoList/TodoList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset theo Material UI */}
      <div className="App">
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
