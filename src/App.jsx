import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme";
import Router from "./router";
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router/>
      </div>
    </ThemeProvider>
  )
}

export default App
