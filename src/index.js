import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Set basename to the relative path to your GitHub Pages subdirectory */}
    <BrowserRouter basename="/svbanquethalls">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
