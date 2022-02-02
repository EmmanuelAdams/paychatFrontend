import './online.css';

function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriends">
      <div className="sidebarProfileImgContainer">
        <img
          className="sidebarProfileImg"
          src={PF + user.profilePicture}
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
