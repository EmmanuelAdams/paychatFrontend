import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Victoria</h4>
              <span className="profileInfoDesc">
                Programmer/Coder
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Sidebar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
