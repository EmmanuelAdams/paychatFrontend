import {
  Chat,
  Notifications,
  Search,
  Settings,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './topbar.css';

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img
          src="../../assets/logo/icon.png"
          alt="logo"
          className="logo"
        />
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
          <img
            src="assets/person/1.jpg"
            alt="profile"
            className="topbarImg"
          />
          <h4>Victoria</h4>
        </div>
        <div className="topbarIcons">
          <IconButton className="iconButton">
            <div className="topbarIconItem">
              <Chat className="icon" />
              <span className="topbarIconBadge">1</span>
            </div>
          </IconButton>

          <IconButton className="iconButton">
            <div className="topbarIconItem">
              <Notifications className="icon" />
              <span className="topbarIconBadge">2</span>
            </div>
          </IconButton>

          <IconButton className="iconButton">
            <div className="topbarIconItem">
              <Settings className="icon" />
            </div>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
