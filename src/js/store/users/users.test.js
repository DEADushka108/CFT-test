import MockAdapter from 'axios-mock-adapter';
import {postsList, user, usersList} from '../../mocks/mocks';
import {createAPI} from '../../services/api';
import {reducer, ActionType, Operation} from './users';

const api = createAPI();

it(`Should users reducer return initial state without additional parameters`, () => {
  expect(reducer(undefined, {})).toEqual({
    users: [],
    activeUser: {},
    userPosts: [],
  });
});

it(`Should reducer update users list`, () => {
  expect(reducer({
    users: [],
  }, {
    type: ActionType.LOAD_USERS,
    payload: usersList,
  })).toEqual({
    users: usersList,
  });
});

it(`Should reducer update active user`, () => {
  expect(reducer({
    activeUser: {},
  }, {
    type: ActionType.LOAD_USER,
    payload: user,
  })).toEqual({
    activeUser: user,
  });
});

it(`Should reducer update user posts`, () => {
  expect(reducer({
    userPosts: [],
  }, {
    type: ActionType.LOAD_USER_POSTS,
    payload: postsList,
  })).toEqual({
    userPosts: postsList,
  });
});


describe(`Users operation works correctly`, () => {
  it(`Should make correct request to /users`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const usersLoader = Operation.loadUsers();

    apiMock
      .onGet(`/users`)
      .reply(200, responseMock);

    return usersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USERS,
          payload: responseMock,
        });
      });
  });

  it(`Should make correct request to /users/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const userLoader = Operation.loadUser(id);

    apiMock
      .onGet(`/users/${id}`)
      .reply(200, responseMock);

    return userLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER,
          payload: responseMock,
        });
      });
  });

  it(`Should make correct request to /users/:id/posts`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const userPostsLoader = Operation.loadUserPosts(id);

    apiMock
      .onGet(`/users/${id}/posts`)
      .reply(200, responseMock);

    return userPostsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_POSTS,
          payload: responseMock,
        });
      });
  });
});
