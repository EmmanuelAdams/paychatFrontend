import {
  EmojiEmotions,
  Map,
  PermMedia,
  Reply,
  Tag,
} from '@mui/icons-material';
import './share.css';

function share() {
  return (
    <div className="share">
      <div className="shareWraper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="assets/person/1.jpg"
            alt="profile_pic"
          />
          <input
            placeholder="Write here to share"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia
                htmlColor="red"
                className="shareIcon"
              />
              <span className="shareOptionText">
                Photo or Video
              </span>
            </div>
            <div className="shareOption">
              <Tag htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Map
                htmlColor="green"
                className="shareIcon"
              />
              <span className="shareOptionText">
                Location
              </span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                htmlColor="yellow"
                className="shareIcon"
              />
              <span className="shareOptionText">
                Feeling
              </span>
            </div>
          </div>
          <button className="shareButton">
            <Reply className="replyIcon" />
            <span className="replyOptionText">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default share;
