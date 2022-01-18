import {
  CommentOutlined,
  MoreVert,
  Reply,
} from '@mui/icons-material';
import './post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((u) => u.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {
                Users.filter((u) => u.id === post.userId)[0]
                  .username
              }
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img
            className="postImg"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              onClick={likeHandler}
              src="assets/redheart.ico"
              alt=""
            />
            <span className="postLikeCounter">
              {like} likes
            </span>
          </div>
          <div className="postBottomCenter">
            <CommentOutlined className="commentIcon" />
            <span className="postCommentText">
              {post.comment} comments
            </span>
          </div>
          <div className="postBottomRight">
            <Reply className="replyIcon" />
            <span className="postShareText">share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
