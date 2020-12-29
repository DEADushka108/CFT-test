import {createAPI} from '../services/api';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {redirect} from './redirect/redirect';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const api = createAPI();
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

export default store;
