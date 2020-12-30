import MockAdapter from 'axios-mock-adapter';
import {comment, commentsList, HttpCode} from '../../mocks/mocks';
import {createAPI} from '../../services/api';
import {reducer, ActionType, Operation} from './comments';

const api = createAPI();

it(`Should comments reducer return initial state without additional parameters`, () => {
  expect(reducer(undefined, {})).toEqual({
    comments: [],
    status: HttpCode.OK,
  });
});

it(`Should reducer update comments list`, () => {
  expect(reducer({
    comments: [],
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: commentsList,
  })).toEqual({
    comments: commentsList
  });
});

it(`Should reducer update status`, () => {
  expect(reducer({
    status: HttpCode.OK,
  }, {
    type: ActionType.UPDATE_STATUS,
    payload: 404,
  })).toEqual({
    status: 404,
  });
});

it(`Should reducer delete comment`, () => {
  expect(reducer({
    comments: commentsList,
  }, {
    type: ActionType.DELETE_COMMENT,
    payload: comment.id,
  })).toEqual({
    comments: commentsList.filter((it) => it.id !== comment.id),
  });
});

describe(`Comments operation works correctly`, () => {
  it(`Should make correct request to /posts/:id/comments`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadComments(id);

    apiMock
      .onGet(`/posts/${id}/comments`)
      .reply(200, responseMock);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: responseMock,
        });
      });
  });

  it(`Should make correct delete request to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const deleteLoader = Operation.deleteComment(id);

    apiMock
      .onDelete(`/comments/${id}`)
      .reply(200);

    return deleteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.DELETE_COMMENT,
          payload: id,
        });
      });
  });
});
