import React from 'react';
import {MAX_POSTS_COUNT, noop, postsList} from '../../mocks/mocks';
import renderer from 'react-test-renderer';
import {ShowMoreButton} from './show-more-button.jsx';

it(`Should render ShowMoreButton component correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          list={postsList}
          count={MAX_POSTS_COUNT}
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
