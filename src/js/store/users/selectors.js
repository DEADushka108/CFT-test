import NameSpace from '../name-space';

const USERS = NameSpace.USERS;

const getUsersList = (state) => {
  return state[USERS].users;
};

export {getUsersList};
