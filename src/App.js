import { Container } from '@mui/material';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import './app.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Messenger from './pages/messenger/Messenger';
import SettingsPage from './pages/settingsPage/SettingsPage';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div className="app">
        <Container className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                user ? <Home /> : <Register />
              }></Route>
            <Route
              path="/profile/:username"
              element={<Profile />}></Route>
          </Routes>
        </Container>
      </div>
      <Routes>
        <Route
          path="/login"
          element={
            user ? <Navigate to="/" /> : <Login />
          }></Route>
        <Route
          path="/register"
          element={
            user ? <Navigate to="/" /> : <Register />
          }></Route>
        <Route
          path="/messenger"
          element={
            !user ? (
              <Navigate to="/" /> || (
                <Navigate to="/messenger" />
              )
            ) : (
              <Messenger />
            )
          }></Route>
        <Route
          path="/settings"
          element={
            !user ? (
              <Navigate to="/" /> || (
                <Navigate to="/settings" />
              )
            ) : (
              <SettingsPage />
            )
          }></Route>
      </Routes>
    </Router>
  );
}

export default App;
