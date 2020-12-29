import React, {Fragment, useCallback, useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {validateText} from '../../utils/utils';
import {AppRoute, HttpCode, PostStatus} from '../../utils/const';
import {getPostStatus} from '../../store/posts/selectors';
import {Operation as PostOperation, ActionCreator as PostCreator} from '../../store/posts/posts';
import {redirectToRoute} from '../../store/redirect/redirect';
import {connect} from 'react-redux';

const AddPostScreen = (props) => {
  const {onSuccessSubmit, onSubmit, status, onUpdatePostStatus} = props;
  const form = useRef();
  const [title, setTitle] = useState(``);
  const [text, setText] = useState(``);
  const [isValid, setValid] = useState(false);

  const handleTitleChange = useCallback((evt) => {
    setTitle(evt.target.value);
    setValid(validateText(title) && validateText(text));
  }, [title, text]);

  const handleTextChange = useCallback((evt) => {
    setText(evt.target.value);
    setValid(validateText(title) && validateText(text));
  }, [title, text]);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (validateText(text) && validateText(title)) {
      onSubmit({
        title,
        userId: 1,
        body: text,
      });
      form.current.disabled = true;
      return;
    }
    onUpdatePostStatus(PostStatus.INVALID);
  }, [status, text, title]);

  useEffect(() => {
    if (status === HttpCode.OK) {
      onUpdatePostStatus(PostStatus.VALID);
      onSuccessSubmit(`${AppRoute.ROOT}`);
      return;
    }
    return;
  }, [status]);

  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Add new post</h1>
      <section className="add-post">
        {status === HttpCode.SERVER_ERROR &&
        <p className="add-post__text">
          Error {status} occurred. Please try again later.
        </p>}
        {status === HttpCode.BAD_REQUEST &&
        <p className="add-post__text">
          Somthing goes wrong. Please check the Internet connection and try again later.
        </p>}
        {status === PostStatus.INVALID &&
        <p className="add-post__text">
          Please type title and write some word.
        </p>}
        <form className="add-post__form" ref={form} onSubmit={handleFormSubmit}>
          <fieldset className="add-post__item post-info">
            <legend className="visually-hidden">Write title an post</legend>
            <p className="post-info__item">
              <label className="post-info__label" htmlFor="post-title">Post title</label>
              <input className="post-info__input" id="post-title" type="text" name="post-title" placeholder="Title" required onChange={handleTitleChange}/>
            </p>
            <p className="post-info__item">
              <label className="post-info__label" htmlFor="comment-field">Text</label>
              <textarea className="post-info__input" name="comment" id="comment-field" rows="5" placeholder="Your post" onChange={handleTextChange}></textarea>
            </p>
          </fieldset>
          <button className="add-post__button" type="submit" disabled={!isValid}>Submit</button>
        </form>
      </section>
    </main>
    <Footer/>

  </Fragment>;
};

AddPostScreen.propTypes = {
  status: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  onSuccessSubmit: PropTypes.func.isRequired,
  onUpdatePostStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: getPostStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(post) {
    dispatch(PostOperation.addPost(post));
  },
  onSuccessSubmit(route) {
    dispatch(redirectToRoute(route));
  },
  onUpdatePostStatus(status) {
    dispatch(PostCreator.updateStatus(status));
  },
});

export {AddPostScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddPostScreen);
