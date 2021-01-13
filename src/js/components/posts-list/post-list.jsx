import React from 'react';
import PropTypes from 'prop-types';
import SmallPostCard from '../small-post-card/small-post-card';
import {postDetails} from '../../types/post';
import {JournalList} from '../../styles/journal/journal';

const PostList = (props) => {
  const {posts, count} = props;
  const postsToShow = posts.slice(0, count);

  return <JournalList>
    {postsToShow.map((post) => {
      const {id} = post;
      return <SmallPostCard key={id} postCard={post}/>;
    })}
  </JournalList>;
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(postDetails),
  count: PropTypes.number.isRequired,
};

export default PostList;
