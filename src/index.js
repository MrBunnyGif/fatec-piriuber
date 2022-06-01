import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginType from './pages/public/Logintype'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login-type" element={<LoginType />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
