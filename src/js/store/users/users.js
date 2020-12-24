import {URL} from '../../utils/const';
import {extend} from '../../utils/utils';

const initialState = {
  users: {},
};

const ActionType = {
  LOAD_USERS: `LOAD_USERS`,
};

const ActionCreator = {
  loadUsers: (userList) => ({
    type: ActionType.LOAD_USERS,
    payload: userList,
  }),
};

const Operation = {
  loadUsers: () => (dispatch, _getState, api) => {
    return api.get(URL.USERS)
      .then((response) => {
        dispatch(ActionCreator.loadUsers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_USERS:
      return extend(state, {
        users: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
