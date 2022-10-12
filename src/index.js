import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login';
import Home from './components/Home';
import SiteCreation from './components/SiteCreation;';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Sample /> */}
    
    <Link to={"/site-creation"} className="navbar-brand">
          Site Creation
    </Link>
    <Routes> 
        <Route exact path="/" element={<Login />} />
        <Route exact path="/site-creation" element={<SiteCreation />} />

        {/* <Route exact path="/register" element={<Register />} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
