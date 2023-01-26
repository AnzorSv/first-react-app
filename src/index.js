import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';
import Topbanner from './Topbanner';
import Topseller from './Topseller';

import './Variables.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Topbanner></Topbanner>
    <Topseller></Topseller>
    <App />
  </React.StrictMode>
);

