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
      <h1 className="visually-hidden">Contact us</h1>
      <section className="post">
        <div className="post__post-card post-card">
          <PostCard post={post} userInfo={userInfo}/>
        </div>
        <div className="post__comments comments">
          <h3 className="comments__title">Comments:</h3>
          <ul className="comments__list">
            {commentsList.map((comment) => {
              const {id, name, body} = comment;
              return <li key={id} className=" comments__item">
                <button className="comments__delete-button" type="button" onClick={() => {
                  onDeleteClick(id);
                }}>
                  <svg className="comments__delete-icon">
                    <use xlinkHref="#remove-item"></use>
                  </svg>
                  <span className="visually-hidden">Delete</span>
                </button>
                <div className="comments__user">
                  <img className="comments__user-image" src="./img/content/no-user.png"/>
                  <p className="comments__name">{name}</p>
                </div>
                <div className="comments__content">
                  <p className="comments__body">{body}</p>
                </div>
              </li>;
            })}
          </ul>
        </div>
      </section>
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
