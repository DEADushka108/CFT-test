import configureStore from 'redux-mock-store';
import {HttpCode, MAX_POSTS_COUNT} from '../const/const';
import {post, postsList} from '../posts/posts';
import {user, usersList} from '../users/users';
import {commentsList} from '../comments/comments';

const NameSpace = {
  POSTS: `POSTS`,
  COMMENTS: `COMMENTS`,
  USERS: `USERS`,
};

const noop = () => {};

const mockStore = configureStore();

const store = mockStore({
  [NameSpace.POSTS]: {
    posts: postsList,
    status: HttpCode.OK,
    postsCount: MAX_POSTS_COUNT,
    activePost: post,
  },
  [NameSpace.USERS]: {
    users: usersList,
    activeUser: user,
    userPosts: postsList,
  },
  [NameSpace.COMMENTS]: {
    comments: commentsList,
    status: HttpCode.OK,
  },
});

export {noop, store};
