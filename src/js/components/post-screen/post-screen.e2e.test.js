import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, noop, post, commentsList, user, match} from '../../mocks/mocks';
import {PostScreen} from './post-screen.jsx';

configure({
  adapter: new Adapter(),
});

const onDeleteClick = jest.fn();

it(`Should delete correct comment on delete button`, () => {
  const postScreen = mount(
      <Provider store={store}>
        <MemoryRouter>
          <PostScreen
            match={match}
            post={post}
            userInfo={user}
            commentsList={commentsList}
            onDeleteClick={onDeleteClick}
            onLoadComments={noop}
            onLoadPost={noop}
            onLoadUser={noop}
          />
        </MemoryRouter>
      </Provider>
  );
  const secondCommentButton = postScreen.find(`button.comments__delete-button`).at(1);

  secondCommentButton.simulate(`click`);
  expect(onDeleteClick).toHaveBeenCalledTimes(1);
  expect(onDeleteClick).toHaveBeenCalledWith(2);
});
