import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Use BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Use BrowserRouter with basename set to PUBLIC_URL */}
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
