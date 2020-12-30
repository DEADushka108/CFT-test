import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, post, usersList, noop} from '../../mocks/mocks';
import {SmallPostCard} from './small-post-card';

it(`Should render SmallPostCard component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <SmallPostCard
            postCard={post}
            usersList={usersList}
            redirect={noop}
            onDeleteClick={noop}
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
