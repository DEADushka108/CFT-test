import {createAPI} from '../services/api';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {redirect} from './redirect/redirect';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator as PostsAction} from './posts/posts';
import {HttpCode} from '../utils/const';

const onError = (status) => {
  store.dispatch(PostsAction.updateStatus(status));
};

const onServerError = () => {
  store.dispatch(PostsAction.updateStatus(HttpCode.SERVER_ERROR));
};

const api = createAPI(onError, onServerError);
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

export default store;
