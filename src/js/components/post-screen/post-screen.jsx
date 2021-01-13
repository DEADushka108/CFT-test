import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getActivePost} from '../../store/posts/selectors';
import {getComments} from '../../store/comments/selectors';
import {Operation as PostsOperation} from '../../store/posts/posts';
import {Operation as CommentsOperation} from '../../store/comments/comments';
import {Operation as UserOperation} from '../../store/users/users';
import {connect} from 'react-redux';
import {postDetails} from '../../types/post';
import {commentsDetails} from '../../types/comments';
import PostCard from '../post-card/post-card';
import {getActiveUser} from '../../store/users/selectors';
import {userDetails} from '../../types/user';
import {Title} from '../../styles/main/main';
import {Section, CommentsList, CommentsTitle, CommentsItem, DeleteButton, DeleteIcon, DeleteText, UserWrapper, UserImage, UserName, ContentWrapper} from '../../styles/post/post';

const PostScreen = (props) => {
  const {match, post, userInfo, commentsList, onLoadPost, onLoadComments, onLoadUser, onDeleteClick} = props;
  const routeId = Number(match.params.id);
  const {userId} = post;

  useEffect(() => {
    onLoadPost(routeId);
    onLoadComments(routeId);
  }, [routeId]);

  useEffect(() => {
    if (userId) {
      onLoadUser(userId);
    }
    return;
  }, [post]);

  return <Fragment>
    <Header/>
    <main className="page-main">
      <Title>Contact us</Title>
      <Section>
        <PostCard post={post} userInfo={userInfo}/>
        <CommentsTitle >Comments:</CommentsTitle>
        <CommentsList>
          {commentsList.map((comment) => {
            const {id, name, body} = comment;
            return <CommentsItem key={id} >
              <DeleteButton type="button" onClick={() => {
                onDeleteClick(id);
              }}>
                <DeleteIcon>
                  <use xlinkHref="#remove-item"></use>
                </DeleteIcon>
                <DeleteText>Delete</DeleteText>
              </DeleteButton>
              <UserWrapper>
                <UserImage src="./img/content/no-user.png"/>
                <UserName>{name}</UserName>
              </UserWrapper>
              <ContentWrapper>
                <p>{body}</p>
              </ContentWrapper>
            </CommentsItem>;
          })}
        </CommentsList>
      </Section>
    </main>
    <Footer/>

  </Fragment>;
};

PostScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  post: postDetails,
  userInfo: userDetails,
  commentsList: PropTypes.arrayOf(commentsDetails),
  onLoadPost: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  onLoadUser: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: getActivePost(state),
  commentsList: getComments(state),
  userInfo: getActiveUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPost(id) {
    dispatch(PostsOperation.loadPost(id));
  },
  onLoadComments(id) {
    dispatch(CommentsOperation.loadComments(id));
  },
  onLoadUser(id) {
    dispatch(UserOperation.loadUser(id));
  },
  onDeleteClick(id) {
    dispatch(CommentsOperation.deleteComment(id));
  },
});

export {PostScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
