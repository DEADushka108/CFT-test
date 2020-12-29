import NameSpace from '../name-space';

const USERS = NameSpace.USERS;

const getUsersList = (state) => {
  return state[USERS].users;
};

const getActiveUser = (state) => {
  return state[USERS].activeUser;
};

const getUserPosts = (state) => {
  return state[USERS].userPosts;
};

export {getUsersList, getActiveUser, getUserPosts};
