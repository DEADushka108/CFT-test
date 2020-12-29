import {combineReducers} from 'redux';
import {reducer as posts} from './posts/posts';
import {reducer as comments} from './comments/comments';
import {reducer as users} from './users/users';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.POSTS]: posts,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.USERS]: users,
});
