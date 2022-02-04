import {
  AccountBalanceWalletOutlined,
  ChatOutlined,
  LogoutOutlined,
  PersonOutline,
  RssFeedOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './settingsPage.css';

export default function SettingsPage() {
  const { user } = useContext(AuthContext);

  const paystackPage = () => {
    window.open('https://paystack.com/pay/yb20z49ft0');
  };

  const logOut = () => {
    window.localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <Link
          to={`/profile/${user.username}`}
          style={{
            color: 'black',
            textDecoration: 'none',
          }}>
          <div className="iconWrapper">
            <PersonOutline
              fontSize="large"
              className="settingsIcon"
            />
            <span className="settingsLinks">
              <p className="settingsText">Profile</p>
            </span>
          </div>
        </Link>
        <Link
          to={'/'}
          style={{
            color: 'black',
            textDecoration: 'none',
          }}>
          <div className="iconWrapper">
            <RssFeedOutlined
              fontSize="large"
              className="settingsIcon"
            />
            <span className="settingsLinks">
              <p className="settingsText">Feeds</p>
            </span>
          </div>
        </Link>
        <Link
          to={'/messenger'}
          style={{
            color: 'black',
            textDecoration: 'none',
          }}>
          <div className="iconWrapper">
            <ChatOutlined
              fontSize="large"
              className="settingsIcon"
            />
            <span className="settingsLinks">
              <p className="settingsText">Chat</p>
            </span>
          </div>
        </Link>

        <div onClick={paystackPage}>
          <div className="iconWrapper">
            <AccountBalanceWalletOutlined
              fontSize="large"
              className="settingsIcon"
            />
            <span className="settingsLinks">
              <p className="settingsText">Payment</p>
            </span>
          </div>
        </div>
      </div>
      <div onClick={logOut}>
        <button type="submit" className="logOut">
          <LogoutOutlined
            fontSize="large"
            className="logOutIcon"
          />
          <p className="logOutText">Log Out</p>
        </button>
      </div>
    </div>
  );
}
