import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PostScreen} from './post-screen.jsx';
import {store, match, post, user, noop, commentsList} from '../../mocks/mocks.js';

it(`Should render PostScreen component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <PostScreen
            match={match}
            post={post}
            userInfo={user}
            onDeleteClick={noop}
            commentsList={commentsList}
            onLoadComments={noop}
            onLoadPost={noop}
            onLoadUser={noop}
          />
        </MemoryRouter>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    });

  expect(tree).toMatchSnapshot();
});
