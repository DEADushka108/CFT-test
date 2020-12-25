import NameSpace from '../name-space';

const POSTS = NameSpace.POSTS;

const getPostsList = (state) => {
  return state[POSTS].posts;
};

const getPostsCount = (state) => {
  return state[POSTS].postsCount;
};

export {getPostsList, getPostsCount};
