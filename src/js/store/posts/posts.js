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
  ADD_POST: `ADD_POST`,
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
  addPost: (post) => ({
    type: ActionType.ADD_POST,
    payload: post,
  }),
  deletePost: (id) => ({
    type: ActionType.DELETE_POST,
    payload: id,
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
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
      });
  },
  addPost: (post) => (dispatch, __getState, api) => {
    return api.post(`${URL.POSTS}`, {
      title: post.title,
      body: post.body,
      userId: post.userId,
    })
    .then((response) => {
      dispatch(ActionCreator.updateStatus(HttpCode.OK));
      dispatch(ActionCreator.addPost(response.data));
    })
    .catch(() => {
      dispatch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
    });
  },
  deletePost: (id) => (dispatch, __getState, api) => {
    return api.delete(`${URL.POSTS}/${id}`)
      .then(() => {
        dispatch(ActionCreator.deletePost(id));
      })
      .catch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
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
    case ActionType.ADD_POST:
      return extend(state, {
        posts: [action.payload, ...state.posts],
      });
    case ActionType.DELETE_POST:
      return extend(state, {
        posts: state.posts.filter((it) => it.id !== action.payload),
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
