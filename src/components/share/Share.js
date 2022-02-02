import {
  Cancel,
  EmojiEmotions,
  Map,
  PermMedia,
  Reply,
  Tag,
} from '@mui/icons-material';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './share.css';
import axios from 'axios';

function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = file.name;
      data.append('file', file);
      data.append('name', fileName);
      newPost.img = fileName;
      try {
        await axios.post('/upload', data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post('/posts', newPost);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="share">
      <div className="shareWraper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt="profile_pic"
          />
          <input
            placeholder={
              user.username + ', write here to share...'
            }
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img
              className="shareImg"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <Cancel
              className="shareCancelImg"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form
          className="shareBottom"
          onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia
                htmlColor="red"
                className="shareIcon"
              />
              <span className="shareOptionText">
                Photo or Video
              </span>
              <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="shareOption" type="submit">
            <Reply className="replyIcon" />
            <span className="shareOptionText">Share</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
