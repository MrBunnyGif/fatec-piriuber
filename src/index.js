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
import DriverContact from './pages/private/Parents/DriverContact'
import DriversList from './pages/private/Parents/DriversList'
import FindChildren from './pages/private/Parents/FindChildren'
import ParentsProfile from './pages/private/Parents/Profile'
import CarRoutes from './pages/private/Driver/CarRoutes'
import Checkin from './pages/private/Driver/Checkin'
import Children from './pages/private/Driver/Children'
import ParentsContact from './pages/private/Driver/ParentsContact'
import Home from './pages/private/Home'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginType />} />
      <Route path="/home" element={<Home />} />

      <Route path="/driver-contact" element={<DriverContact />} />
      <Route path="/drivers-list" element={<DriversList />} />
      <Route path="/find-children" element={<FindChildren />} />
      <Route path="/parents-profile" element={<ParentsProfile />} />

      <Route path="/car-routes" element={<CarRoutes />} />
      <Route path="/checkin" element={<Checkin />} />
      <Route path="/manage-children" element={<Children />} />
      <Route path="/parents-contact" element={<ParentsContact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
