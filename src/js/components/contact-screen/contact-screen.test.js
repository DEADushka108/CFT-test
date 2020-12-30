import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import ContactScreen from './contact-screen';
import {store} from '../../mocks/mocks';

it(`Should render ContactScreen component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <ContactScreen/>
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
