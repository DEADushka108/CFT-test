import React from 'react';
import PropTypes from 'prop-types';
import SmallPostCard from '../small-post-card/small-post-card';
import {postDetails} from '../../types/post';

const PostList = (props) => {
  const {posts} = props;

  return <div className="catalog__post-list">
    {posts.map((post) => {
      const {id} = post;
      return <SmallPostCard key={id} postCard={post}/>;
    })}
  </div>;
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(postDetails),
};

export default PostList;
