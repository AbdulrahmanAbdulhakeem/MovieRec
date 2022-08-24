import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import Mydrawer from './component/Mydrawer'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Genre from './pages/Genre'
import NoMatch from './pages/NoMatch';
import DetailsPage from './pages/DetailsPage';
import SearchResults from './pages/SearchResults';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />

    <Mydrawer />
    <Routes>
      <Route path = '/' element = {<App />} />
      <Route path = '/genre/:genre' element = {<Genre />} />
      <Route path = '/detailspage/:details' element = {<DetailsPage />} />
      <Route path='/searchresults/:search' element = {<SearchResults />} />
      <Route path = '*' element = {<NoMatch />} />
      {/* <Route path = '/searched/:search' element = {<SearchItem />} /> */}
     </Routes>
    </ThemeProvider>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
