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
  }),
  deleteComment: (id) => ({
    type: ActionType.DELETE_COMMENT,
    payload: id,
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
  deleteComment: (id) => (dispatch, __getState, api) => {
    return api.delete(`${URL.COMMENTS}/${id}`)
      .then(() => {
        dispatch(ActionCreator.deleteComment(id));
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
    case ActionType.DELETE_COMMENT:
      return extend(state, {
        comments: state.comments.filter((it) => it.id !== action.payload),
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
