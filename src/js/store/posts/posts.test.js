import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {reducer, ActionType, Operation} from './posts';
import {HttpCode, MAX_POSTS_COUNT, post, postsList} from '../../mocks/mocks';

const api = createAPI();

it(`Should post reducer return initial stat without additional parameters`, () => {
  expect(reducer(undefined, {})).toEqual({
    posts: [],
    status: HttpCode.OK,
    postsCount: MAX_POSTS_COUNT,
    activePost: {},
  });
});

it(`Should reducer update posts list`, () => {
  expect(reducer({
    posts: [],
  }, {
    type: ActionType.LOAD_POSTS,
    payload: postsList
  })).toEqual({
    posts: postsList
  });
});

it(`Should reducer update active post`, () => {
  expect(reducer({
    activePost: {},
  }, {
    type: ActionType.LOAD_POST,
    payload: post
  })).toEqual({
    activePost: post
  });
});

it(`Should reducer update post status`, () => {
  expect(reducer({
    status: 200,
  }, {
    type: ActionType.UPDATE_STATUS,
    payload: 500,
  })).toEqual({
    status: 500,
  });
});

it(`Should reducer update post count`, () => {
  expect(reducer({
    postsCount: MAX_POSTS_COUNT,
  }, {
    type: ActionType.SET_POSTS_COUNT,
    payload: MAX_POSTS_COUNT,
  })).toEqual({
    postsCount: MAX_POSTS_COUNT * 2,
  });
});

it(`Should reducer add post`, () => {
  expect(reducer({
    posts: postsList,
  }, {
    type: ActionType.ADD_POST,
    payload: post,
  })).toEqual({
    posts: [post, ...postsList],
  });
});

it(`Should reducer delete post`, () => {
  expect(reducer({
    posts: postsList,
  }, {
    type: ActionType.DELETE_POST,
    payload: post.id,
  })).toEqual({
    posts: postsList.filter((it) => it.id !== post.id),
  });
});

describe(`Posts operation works correctly`, () => {
  it(`Should make correct request to /posts`, function () {
    const apiMock = new MockAdapter(api);
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const postsLoader = Operation.loadPosts();

    apiMock
      .onGet(`/posts`)
      .reply(200, responseMock);

    return postsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_POSTS,
          payload: responseMock,
        });
      });
  });

  it(`Should make correct request to /posts/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const postLoader = Operation.loadPost(id);

    apiMock
      .onGet(`/posts/${id}`)
      .reply(200, responseMock);

    return postLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_POST,
          payload: responseMock,
        });
      });
  });

  it(`Should make correct post request to /posts`, () => {
    const apiMock = new MockAdapter(api);
    const postMock = {id: 100, userId: 1, title: 123, body: 123};
    const dispatch = jest.fn();
    const addPostLoader = Operation.addPost(postMock);

    apiMock
      .onPost(`/posts`)
      .reply(200, postMock);

    return addPostLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_STATUS,
          payload: 200,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_POST,
          payload: postMock,
        });
      });
  });

  it(`Should make correct delete request to /posts/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const deleteLoader = Operation.deletePost(id);

    apiMock
      .onDelete(`/posts/${id}`)
      .reply(200);

    return deleteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.DELETE_POST,
          payload: id,
        });
      });
  });
});
