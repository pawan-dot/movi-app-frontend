import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
const setupAxios = () => {

  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.headers = {
    'Cache-Control': 'no-cache,no-store',
    'Pragma': 'no-cache',
    'Expires': '0',
  };
};

setupAxios();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
