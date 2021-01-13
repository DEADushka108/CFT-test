import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import PostList from '../posts-list/post-list';
import {postDetails} from '../../types/post';
import {getPostsCount, getPostsList} from '../../store/posts/selectors';
import {connect} from 'react-redux';
import ShowMoreButton from '../show-more-button/show-more-button';
import {AppRoute} from '../../utils/const';
import {Title} from '../../styles/main/main';
import {JournalSection, JournalLink, JournalIcon, JournalWrapper, JournalMore} from '../../styles/journal/journal';

const Main = (props) => {
  const {postsList, postsCount} = props;

  return <React.Fragment>
    <Header/>
    <main>
      <Title>Test</Title>
      <JournalSection>
        <JournalLink to={`${AppRoute.POST}/add`}>
          <JournalIcon>
            <use xlinkHref="#add"></use>
          </JournalIcon>
          Add post
        </JournalLink>
        <JournalWrapper>
          <PostList posts={postsList} count={postsCount}/>
        </JournalWrapper>
        <JournalMore>
          <ShowMoreButton list={postsList} count={postsCount}/>
        </JournalMore>
      </JournalSection>
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

