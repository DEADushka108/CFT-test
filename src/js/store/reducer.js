import {combineReducers} from 'redux';
import {reducer as posts} from './posts/posts';
import {reducer as comments} from './comments/comments';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.POSTS]: posts,
  [NameSpace.COMMENTS]: comments,
});
