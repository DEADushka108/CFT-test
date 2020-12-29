import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {postsList, store, MAX_POSTS_COUNT} from '../../mocks/mocks';
import {Main} from './main';

it(`Should Main component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <Main
            postsList={postsList}
            postsCount={MAX_POSTS_COUNT}
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
