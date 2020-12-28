import {URL} from '../../utils/const';
import {extend} from '../../utils/utils';

const initialState = {
  users: {},
  activeUser: {},
  userPosts: [],
};

const ActionType = {
  LOAD_USERS: `LOAD_USERS`,
  LOAD_USER: `LOAD_USER`,
  LOAD_USER_POSTS: `LOAD_USER_POSTS`,
};

const ActionCreator = {
  loadUsers: (userList) => ({
    type: ActionType.LOAD_USERS,
    payload: userList,
  }),
  loadUser: (userInfo) => ({
    type: ActionType.LOAD_USER,
    payload: userInfo,
  }),
  loadUserPosts: (posts) => ({
    type: ActionType.LOAD_USER_POSTS,
    payload: posts,
  })
};

const Operation = {
  loadUsers: () => (dispatch, _getState, api) => {
    return api.get(URL.USERS)
      .then((response) => {
        dispatch(ActionCreator.loadUsers(response.data));
      });
  },
  loadUser: (id) => (dispatch, __getState, api) => {
    return api.get(`${URL.USERS}/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadUser(response.data));
      });
  },
  loadUserPosts: (id) => (dispatch, __getState, api) => {
    return api.get(`${URL.USERS}/${id}/posts`)
      .then((response) => {
        dispatch(ActionCreator.loadUserPosts(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_USERS:
      return extend(state, {
        users: action.payload,
      });
    case ActionType.LOAD_USER:
      return extend(state, {
        activeUser: action.payload,
      });
    case ActionType.LOAD_USER_POSTS:
      return extend(state, {
        userPosts: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
