import React from 'react';
import {Link} from 'react-router-dom';
import {postDetails} from '../../types/post';
import {userDetails} from '../../types/user';
import {AppRoute} from '../../utils/const';

const PostCard = (props) => {
  const {post, userInfo} = props;
  const {title, body, userId} = post;
  const {username} = userInfo;

  return <article className="post-card__notice">
    <div className="post-card__user" >
      <img className="post-card__user-image" src="./img/content/no-user.png" alt={username}/>
      <Link to={`${AppRoute.USER}/${userId}`} className="post-card__user-name">
        {username}
      </Link>
    </div>
    <div className="post-card__content">
      <h3 className="post-card__title">{title}</h3>
      <img className="post-card__image" src="./img/content/no-image.png"/>
      <p className="post-card__text">{body}</p>
    </div>
  </article>;
};

PostCard.propTypes = {
  post: postDetails,
  userInfo: userDetails,
};

export default PostCard;
