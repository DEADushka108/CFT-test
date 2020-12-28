import {URL, HttpCode} from '../../utils/const';
import {extend} from '../../utils/utils';

const initialState = {
  comments: [],
  status: HttpCode.OK,
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  DELETE_COMMENT: `DELETE_COMMENT`,
  UPDATE_STATUS: `UPDATE_STATUS`,
};

const ActionCreator = {
  loadComments: (commentList) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: commentList,
  }),
  updateStatus: (status) => ({
    type: ActionType.UPDATE_STATUS,
    payload: status
  })
};

const Operation = {
  loadComments: (id) => (dispatch, _getState, api) => {
    return api.get(`${URL.POSTS}/${id}/comments`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.UPDATE_STATUS:
      return extend(state, {
        status: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
