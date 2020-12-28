import {URL, HttpCode, MAX_POSTS_COUNT} from '../../utils/const';
import {extend, shuffleArray} from '../../utils/utils';

const initialState = {
  posts: [],
  status: HttpCode.OK,
  postsCount: MAX_POSTS_COUNT,
  activePost: {},
};

const ActionType = {
  LOAD_POSTS: `LOAD_POSTS`,
  LOAD_POST: `LOAD_POST`,
  DELETE_POST: `DELETE_POST`,
  UPDATE_STATUS: `UPDATE_STATUS`,
  SET_POSTS_COUNT: `SET_POSTS_COUNT`,
};

const ActionCreator = {
  loadPosts: (postList) => ({
    type: ActionType.LOAD_POSTS,
    payload: postList,
  }),
  loadPost: (post) => ({
    type: ActionType.LOAD_POST,
    payload: post,
  }),
  updateStatus: (status) => ({
    type: ActionType.UPDATE_STATUS,
    payload: status
  }),
  setPostsCount: () => ({
    type: ActionType.SET_POSTS_COUNT,
    payload: MAX_POSTS_COUNT,
  }),
};

const Operation = {
  loadPosts: () => (dispatch, _getState, api) => {
    return api.get(URL.POSTS)
      .then((response) => {
        dispatch(ActionCreator.loadPosts(shuffleArray(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
      });
  },
  loadPost: (id) => (dispatch, __getState, api) => {
    return api.get(`${URL.POSTS}/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadPost(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POSTS:
      return extend(state, {
        posts: action.payload,
      });
    case ActionType.LOAD_POST:
      return extend(state, {
        activePost: action.payload,
      });
    case ActionType.UPDATE_STATUS:
      return extend(state, {
        status: action.payload,
      });
    case ActionType.SET_POSTS_COUNT:
      return extend(state, {
        postsCount: state.postsCount + action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
