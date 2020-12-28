import NameSpace from '../name-space';

const POSTS = NameSpace.POSTS;

const getPostsList = (state) => {
  return state[POSTS].posts;
};

const getPostsCount = (state) => {
  return state[POSTS].postsCount;
};

const getActivePost = (state) => {
  return state[POSTS].activePost;
};

export {getPostsList, getPostsCount, getActivePost};
