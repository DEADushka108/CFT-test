import React from 'react';
import {postDetails} from '../../types/post';

const PostCard = (props) => {
  const {post} = props;
  const {title, body} = post;

  return <article className="post-card__notice">
    <h3 className="post-card__title">{title}</h3>
    <p className="post-card__text">{body}</p>
  </article>;
};

PostCard.propTypes = {
  post: postDetails,
};

export default PostCard;
