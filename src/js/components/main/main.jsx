import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import PostList from '../posts-list/post-list';
import {postDetails} from '../../types/post';
import {getPostsList} from '../../store/posts/selectors';
import {connect} from 'react-redux';

const Main = (props) => {
  const {postsList} = props;

  return <React.Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="page-main__title">Test</h1>
      <PostList posts={postsList}/>
    </main>
    <Footer/>
  </React.Fragment>;
};

Main.propTypes = {
  postsList: PropTypes.arrayOf(postDetails),
};

const mapStateToProps = (state) => ({
  postsList: getPostsList(state),
});

export {Main};
export default connect(mapStateToProps)(Main);

