import { Container } from '@mui/material';
import Home from './pages/home/Home';

import './app.css';
// import Profile from './pages/profile/Profile';
// import Login from './pages/login/Login';
// import Register from './pages/register/Register';

function App() {
  return (
    <div className="app">
      <Container className="container">
        <Home />
      </Container>
    </div>
  );
}

export default App;
