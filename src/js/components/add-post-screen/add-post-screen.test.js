import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {HttpCode, noop, store} from '../../mocks/mocks';
import {AddPostScreen} from './add-post-screen.jsx';

it(`Should render AddPostScreen component correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <AddPostScreen
              status={HttpCode.OK}
              onSubmit={noop}
              onSuccessSubmit={noop}
              onUpdatePostStatus={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
