import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './Components/AppProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
