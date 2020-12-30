import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, post, user} from '../../mocks/mocks';
import PostCard from './post-card.jsx';

it(`Should render PostCard component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <PostCard
            post={post}
            userInfo={user}
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
