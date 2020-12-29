import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import Footer from './footer';

it(`Should render Footer component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Footer/>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
