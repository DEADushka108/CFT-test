import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, noop, post, usersList} from '../../mocks/mocks';
import {SmallPostCard} from './small-post-card';

configure({
  adapter: new Adapter(),
});

const onDeleteClick = jest.fn();

it(`Should delete correct post on delete button click`, () => {
  const postScreen = mount(
      <Provider store={store}>
        <MemoryRouter>
          <SmallPostCard
            postCard={post}
            usersList={usersList}
            redirect={noop}
            onDeleteClick={onDeleteClick}
          />
        </MemoryRouter>
      </Provider>
  );
  const deleteButton = postScreen.find(`button.small-card__delete-button`);

  deleteButton.simulate(`click`);
  expect(onDeleteClick).toHaveBeenCalledTimes(1);
  expect(onDeleteClick).toHaveBeenCalledWith(1);
});
