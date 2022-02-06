import './message.css';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

export default function Message({ message, own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <Link to={`/profile/${message.sender.username}`}>
          <img
            className="messageImg"
            src={
              PF +
              (message.sender.profilePicture ||
                'person/noAvatar.png')
            }
            alt=""
          />
        </Link>

        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">
        {format(message.createdAt)}
      </div>
    </div>
  );
}
