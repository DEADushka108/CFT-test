import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, postsList, MAX_POSTS_COUNT} from '../../mocks/mocks';
import PostList from './post-list';

it(`Should render PostList component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <PostList
            posts={postsList}
            count={MAX_POSTS_COUNT}
          />
        </MemoryRouter>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
