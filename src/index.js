import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Operation as PostsOperation} from './js/store/posts/posts';
import {Operation as CommentsOperation} from './js/store/comments/comments';
import store from './js/store/store';
import App from './js/components/app/app.jsx';

const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context(`./img/icons`, true, /\.svg$/));

const rootElement = document.querySelector(`#root`);

Promise.all([
  store.dispatch(PostsOperation.loadPosts()),
  store.dispatch(CommentsOperation.loadComments(1)),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        rootElement
    );
  });
