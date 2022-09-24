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
import { AnimatePresence } from 'framer-motion';

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
    <AnimatePresence exitBeforeEnter>
    <Routes>
      <Route path = '/' element = {<App />} />
      <Route path = '/genre/:genre' element = {<Genre />} />
      <Route path = '/detailspage/:details' element = {<DetailsPage />} />
      <Route path='/searchresults/:search' element = {<SearchResults />} />
      <Route path = '*' element = {<NoMatch />} />
     </Routes>
     </AnimatePresence>
    </ThemeProvider>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

