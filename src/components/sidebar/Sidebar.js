import './sidebar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@mui/icons-material';

function Sidebar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } =
    useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          '/users/friends/' + user._id
        );
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

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
        {user.username !== currentUser.username && (
          <button
            className="sidebarFollowButton"
            onClick={handleClick}>
            {followed ? 'unfollow' : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="sidebarTitle">User information</h4>
        <div className="sidebarInfo">
          <div className="sidebarInfoItem">
            <span className="sidebarInfoKey">City:</span>
            <span className="sidebarInfoValue">
              {user.city}
            </span>
          </div>
          <div className="sidebarInfoItem">
            <span className="sidebarInfoKey">From:</span>
            <span className="sidebarInfoValue">
              {user.from}
            </span>
          </div>
          <div className="sidebarInfoItem">
            <span className="sidebarInfoKey">
              Relationship:
            </span>
            <span className="sidebarInfoValue">
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : '-'}
            </span>
          </div>
        </div>
        <h4 className="sidebarTitle">User friends</h4>
        <div className="sidebarFollowings">
          {friends.map((friend) => (
            <Link
              to={'/profile/' + friend.username}
              style={{ textDecoration: 'none' }}>
              <div className="sidebarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + 'person/noAvatar.png'
                  }
                  alt=""
                  className="sidebarFollowingImg"
                />
                <span className="sidebarFollowingName">
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {user ? <ProfileSidebar /> : <HomeSidebar />}
      </div>
    </div>
  );
}

export default Sidebar;
