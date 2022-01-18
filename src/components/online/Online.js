import './online.css';

function Online({ user }) {
  return (
    <li className="sidebarFriends">
      <div className="sidebarProfileImgContainer">
        <img
          className="sidebarProfileImg"
          src={user.profilePicture}
          alt=""
        />
        <span className="sidebarOnline"></span>
      </div>
      <span className="sidebarUsername">
        {user.username}
      </span>
    </li>
  );
}

export default Online;
