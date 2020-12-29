import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowMoreButton} from './show-more-button.jsx';
import {MAX_POSTS_COUNT, postsList} from '../../mocks/mocks.js';

configure({
  adapter: new Adapter(),
});

const onClick = jest.fn();

it(`Should call onClick handler once`, () => {
  const showMoreButton = shallow(
      <ShowMoreButton
        list={postsList}
        count={MAX_POSTS_COUNT}
        onClick={onClick}
      />
  );
  const button = showMoreButton.find(`button.journal__button`);

  button.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
