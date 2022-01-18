import './sidebar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

function Sidebar({ profile }) {
  const HomeSidebar = () => {
    return (
      <>
        <div className="adContainer">
          <img
            className="sidebarAd"
            src="assets/ad.jpg"
            alt=""
          />
        </div>
        <h4 className="sidebarTitle">Online Friends</h4>
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileSidebar = () => {
    return (
      <>
        <h4 className="sidebarTitle">User information</h4>
        <div className="sidebarInfo">
          <div className="sidebarInfoItem">
            <span className="sidebarInfoKey">City:</span>
            <span className="sidebarInfoValue">
              New York
            </span>
          </div>
          <div className="sidebarInfoItem">
            <span className="sidebarInfoKey">From:</span>
            <span className="sidebarInfoValue">
              Nigeria
            </span>
          </div>
          <div className="sidebarInfoItem">
            <span className="sidebarInfoKey">
              Relationship:
            </span>
            <span className="sidebarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="sidebarTitle">User friends</h4>
        <div className="sidebarFollowings">
          <div className="sidebarFollowing">
            <img
              src="assets/person/6.jpg"
              alt=""
              className="sidebarFollowingImg"
            />
            <span className="sidebarFollowingName">
              Danielle Brown
            </span>
          </div>
          <div className="sidebarFollowing">
            <img
              src="assets/person/3.jpg"
              alt=""
              className="sidebarFollowingImg"
            />
            <span className="sidebarFollowingName">
              Danielle Brown
            </span>
          </div>
          <div className="sidebarFollowing">
            <img
              src="assets/person/2.jpg"
              alt=""
              className="sidebarFollowingImg"
            />
            <span className="sidebarFollowingName">
              Danielle Brown
            </span>
          </div>
          <div className="sidebarFollowing">
            <img
              src="assets/person/9.jpg"
              alt=""
              className="sidebarFollowingImg"
            />
            <span className="sidebarFollowingName">
              Danielle Brown
            </span>
          </div>
          <div className="sidebarFollowing">
            <img
              src="assets/person/8.jpg"
              alt=""
              className="sidebarFollowingImg"
            />
            <span className="sidebarFollowingName">
              Danielle Brown
            </span>
          </div>
          <div className="sidebarFollowing">
            <img
              src="assets/person/7.jpg"
              alt=""
              className="sidebarFollowingImg"
            />
            <span className="sidebarFollowingName">
              Danielle Brown
            </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {profile ? <ProfileSidebar /> : <HomeSidebar />}
      </div>
    </div>
  );
}

export default Sidebar;
