import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {UserScreen} from './user-screen';
import {store, match, user, noop, postsList} from '../../mocks/mocks.js';

it(`Should render UserScreen component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <UserScreen
            userInfo={user}
            userPosts={postsList}
            match={match}
            onLoadPosts={noop}
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
