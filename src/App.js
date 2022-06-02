import React, { Component } from 'react';
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
import {
  Routes,
  Route
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<LoginType />} />

        <Route path='/home' element={<ProtectedRoute component={<Home />} />} />
        <Route path="/find-children" element={<ProtectedRoute component={<FindChildren />} />} />
        <Route path="/driver-contact" element={<ProtectedRoute component={<DriverContact />} />} />
        <Route path="/drivers-list" element={<ProtectedRoute component={<DriversList />} />} />
        <Route path="/parents-profile" element={<ProtectedRoute component={<ParentsProfile />} />} />

        <Route path="/checkin" element={<ProtectedRoute component={<Checkin />} />} />
        <Route path="/car-routes" element={<ProtectedRoute component={<CarRoutes />} />} />
        <Route path="/parents-contact" element={<ProtectedRoute component={<ParentsContact />} />} />
        <Route path="/manage-children" element={<ProtectedRoute component={<Children />} />} />
      </Routes>
    );
  }
}

export default App;
