import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import { LoginScreen } from './login.jsx';

function Root() {
  const [loggedIn, setLoggedIn] = useState(
    () => sessionStorage.getItem('dsb_auth') === '1'
  );
  const handleLogin = () => {
    sessionStorage.setItem('dsb_auth', '1');
    setLoggedIn(true);
  };
  return loggedIn ? <App /> : <LoginScreen onLogin={handleLogin} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
