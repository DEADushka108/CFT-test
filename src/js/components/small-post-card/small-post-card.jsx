import React from 'react';
import PropTypes from 'prop-types';
import {redirectToRoute} from '../../store/redirect/redirect';
import {connect} from 'react-redux';
import {Operation as PostOperation} from '../../store/posts/posts';
import {postDetails} from '../../types/post';
import {AppRoute} from '../../utils/const';
import {userDetails} from '../../types/user';
import {findItemById, getBody} from '../../utils/utils';
import {getUsersList} from '../../store/users/selectors';
import {Article, ContentImage, ContentText, ContentTitle, ContentWrapper, DeleteButton, DeleteIcon, DeleteText, UserImage, UserName, UserWrapper} from '../../styles/small-card/small-card';

const SmallPostCard = (props) => {
  const {postCard, usersList, redirect, onDeleteClick} = props;
  const {id, userId, title, body} = postCard;
  const userInfo = findItemById(userId, usersList);
  const {username} = userInfo;

  return <Article>
    <UserWrapper>
      <UserImage src="./img/content/no-user.png" alt={username}/>
      <UserName onClick={() => {
        redirect(`${AppRoute.USER}/${userId}`);
      }}>
        {username}
      </UserName>
      <DeleteButton type="button" onClick={() => {
        onDeleteClick(id);
      }}>
        <DeleteIcon>
          <use xlinkHref="#remove-item"></use>
        </DeleteIcon>
        <DeleteText>Delete</DeleteText>
      </DeleteButton>
    </UserWrapper>
    <ContentWrapper onClick={() => {
      redirect(`${AppRoute.POSTS}/${id}`);
    }}>
      <ContentImage src="./img/content/no-image.png" alt={title}/>
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{getBody(body)}</ContentText>
    </ContentWrapper>
  </Article>;
};

SmallPostCard.propTypes = {
  postCard: postDetails,
  usersList: PropTypes.arrayOf(userDetails),
  redirect: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  usersList: getUsersList(state),
});

const mapDispatchToProps = (dispatch) => ({
  redirect(route) {
    dispatch(redirectToRoute(route));
  },
  onDeleteClick(id) {
    dispatch(PostOperation.deletePost(id));
  },
});

export {SmallPostCard};
export default connect(mapStateToProps, mapDispatchToProps)(SmallPostCard);
