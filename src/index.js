import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Providers/UserContext';

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
    <App />
    </UserProvider>
    </BrowserRouter>,
  document.getElementById('root')
);