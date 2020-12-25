import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import PostList from '../posts-list/post-list';
import {postDetails} from '../../types/post';
import {getPostsCount, getPostsList} from '../../store/posts/selectors';
import {connect} from 'react-redux';
import ShowMoreButton from '../show-more-button/show-more-button';

const Main = (props) => {
  const {postsList, postsCount} = props;

  return <React.Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="page-main__title visually-hidden">Test</h1>
      <section className="journal">
        <div className="journal__wrapper">
          <PostList posts={postsList} count={postsCount}/>
        </div>
      </section>
      <div className="journal__more">
        <ShowMoreButton list={postsList} count={postsCount}/>
      </div>
    </main>
    <Footer/>
  </React.Fragment>;
};

Main.propTypes = {
  postsList: PropTypes.arrayOf(postDetails),
  postsCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  postsList: getPostsList(state),
  postsCount: getPostsCount(state),
});

export {Main};
export default connect(mapStateToProps)(Main);

