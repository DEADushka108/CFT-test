import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getActivePost} from '../../store/posts/selectors';
import {getComments} from '../../store/comments/selectors';
import {Operation as PostsOperation} from '../../store/posts/posts';
import {Operation as CommentsOperation} from '../../store/comments/comments';
import {connect} from 'react-redux';
import {postDetails} from '../../types/post';
import {commentsDetails} from '../../types/comments';
import PostCard from '../post-card/post-card';

const PostScreen = (props) => {
  const {match, post, commentsList, onLoadPost, onLoadComments} = props;
  const routeId = Number(match.params.id);


  useEffect(() => {
    onLoadPost(routeId);
    onLoadComments(routeId);
  }, [routeId]);

  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Contact us</h1>
      <section className="post">
        <div className="post__post-card post-card">
          <PostCard post={post}/>
        </div>
        <div className="post__comments comments">
          <ul>
            {commentsList.map((comment) => {
              const {id, name, body} = comment;
              return <li key={id} className=" comments__item">
                <p className="comments__name">{name}</p>
                <p className="comments__body">{body}</p>
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
  commentsList: PropTypes.arrayOf(commentsDetails),
  onLoadPost: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: getActivePost(state),
  commentsList: getComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPost(id) {
    dispatch(PostsOperation.loadPost(id));
  },
  onLoadComments(id) {
    dispatch(CommentsOperation.loadComments(id));
  },
});

export {PostScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
