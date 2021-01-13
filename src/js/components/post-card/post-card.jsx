import React from 'react';
import {Article, UserImage, UserWrapper, UserLink, ContentWrapper, ContentTitle, ContentImage, ContentText} from '../../styles/post-card/post-card';
import {postDetails} from '../../types/post';
import {userDetails} from '../../types/user';
import {AppRoute} from '../../utils/const';

const PostCard = (props) => {
  const {post, userInfo} = props;
  const {title, body, userId} = post;
  const {username} = userInfo;

  return <Article>
    <UserWrapper>
      <UserImage src="./img/content/no-user.png" alt={username}/>
      <UserLink to={`${AppRoute.USER}/${userId}`}>
        {username}
      </UserLink>
    </UserWrapper>
    <ContentWrapper>
      <ContentTitle>{title}</ContentTitle>
      <ContentImage src="./img/content/no-image.png"/>
      <ContentText>{body}</ContentText>
    </ContentWrapper>
  </Article>;
};

PostCard.propTypes = {
  post: postDetails,
  userInfo: userDetails,
};

export default PostCard;
