import NameSpace from '../name-space';

const POSTS = NameSpace.POSTS;

const getPostsList = (state) => {
  return state[POSTS].posts;
};

export {getPostsList};
