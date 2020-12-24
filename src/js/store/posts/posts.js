import {URL, HttpCode} from '../../utils/const';
import {extend} from '../../utils/utils';

const initialState = {
  posts: {},
  status: HttpCode.OK,
};

const ActionType = {
  LOAD_POSTS: `LOAD_POSTS`,
  DELETE_POST: `DELETE_POST`,
  UPDATE_STATUS: `UPDATE_STATUS`,
};

const ActionCreator = {
  loadPosts: (postList) => ({
    type: ActionType.LOAD_POSTS,
    payload: postList,
  }),
  updateStatus: (status) => ({
    type: ActionType.UPDATE_STATUS,
    payload: status
  })
};

const Operation = {
  loadPosts: () => (dispatch, _getState, api) => {
    return api.get(URL.POSTS)
      .then((response) => {
        dispatch(ActionCreator.loadPosts(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POSTS:
      return extend(state, {
        posts: action.payload,
      });
    case ActionType.UPDATE_STATUS:
      return extend(state, {
        status: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
