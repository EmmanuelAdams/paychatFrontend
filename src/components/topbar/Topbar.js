import { Link } from 'react-router-dom';
import {
  Chat,
  Notifications,
  Search,
  Settings,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './topbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <img
            src="../../assets/logo/icon.png"
            alt="logo"
            className="logo"
          />
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search PayChat..."
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarImgText">
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + 'person/noAvatar.png'
              }
              alt="profile"
              className="topbarImg"
            />
          </Link>

          <h4>{user.username}</h4>
        </div>

        <div className="topbarIcons">
          <Link to={'/messenger'}>
            <IconButton className="iconButton">
              <div className="topbarIconItem">
                <Chat className="icon" />
                <span className="topbarIconBadge">1</span>
              </div>
            </IconButton>
          </Link>
          <IconButton className="iconButton">
            <div className="topbarIconItem">
              <Notifications className="icon" />
              <span className="topbarIconBadge">2</span>
            </div>
          </IconButton>
          <Link to={'/settings'}>
            <IconButton className="iconButton">
              <div className="topbarIconItem">
                <Settings className="icon" />
              </div>
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
