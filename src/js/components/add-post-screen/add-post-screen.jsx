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
import {Title} from '../../styles/main/main';
import {Form, Section, SubmitButton, Item, PostLegend, PostItem, PostLabel, PostInput, PostTextarea} from '../../styles/add-post/add-post';

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
      <Title>Add new post</Title>
      <Section>
        {status === HttpCode.SERVER_ERROR &&
        <p>
          Error {status} occurred. Please try again later.
        </p>}
        {status === HttpCode.BAD_REQUEST &&
        <p>
          Somthing goes wrong. Please check the Internet connection and try again later.
        </p>}
        {status === PostStatus.INVALID &&
        <p>
          Please type title and write some word.
        </p>}
        <Form ref={form} onSubmit={handleFormSubmit}>
          <Item>
            <PostLegend>Write title an post</PostLegend>
            <PostItem>
              <PostLabel htmlFor="post-title">Post title</PostLabel>
              <PostInput className="post-info__input" id="post-title" type="text" name="post-title" placeholder="Title" required onChange={handleTitleChange}/>
            </PostItem>
            <PostItem>
              <PostLabel htmlFor="comment-field">Text</PostLabel>
              <PostTextarea name="comment" id="comment-field" rows="5" placeholder="Your post" onChange={handleTextChange}></PostTextarea>
            </PostItem>
          </Item>
          <SubmitButton type="submit" disabled={!isValid}>Submit</SubmitButton>
        </Form>
      </Section>
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
