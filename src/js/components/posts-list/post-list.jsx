import React from 'react';
import PropTypes from 'prop-types';
import SmallPostCard from '../small-post-card/small-post-card';
import {postDetails} from '../../types/post';

const PostList = (props) => {
  const {posts, count} = props;
  const postsToShow = posts.slice(0, count);

  return <div className="journal__post-list">
    {postsToShow.map((post) => {
      const {id} = post;
      return <SmallPostCard key={id} postCard={post}/>;
    })}
  </div>;
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(postDetails),
  count: PropTypes.number.isRequired,
};

export default PostList;
