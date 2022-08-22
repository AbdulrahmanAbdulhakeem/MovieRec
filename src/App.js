import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Home from './pages/Home'


console.log(process.env.REACT_APP_SECRET_KEY)

function App() {
  return (
    
      <div className="App">
        <Home />
    </div>

      );
}

export default App;
