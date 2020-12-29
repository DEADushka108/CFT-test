import NameSpace from '../name-space';

const COMMENTS = NameSpace.COMMENTS;

const getComments = (state) => {
  return state[COMMENTS].comments;
};

export {getComments};
