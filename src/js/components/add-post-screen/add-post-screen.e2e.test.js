import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, noop, HttpCode} from '../../mocks/mocks';
import {AddPostScreen} from './add-post-screen';

configure({
  adapter: new Adapter(),
});

const onSubmit = jest.fn();

it(`Should pass correct title and text on add post submit`, () => {
  const addPostScreen = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AddPostScreen
            status={HttpCode.OK}
            onUpdatePostStatus={noop}
            onSubmit={onSubmit}
            onSuccessSubmit={noop}
          />
        </MemoryRouter>
      </Provider>
  );
  const addPostForm = addPostScreen.find(`form.add-post__form`);
  const titleField = addPostScreen.find(`input.post-info__input`);
  const textField = addPostScreen.find(`textarea.post-info__input`);

  titleField.simulate(`change`, {
    target: {
      value: `Written title`,
    },
  });
  textField.simulate(`change`, {
    target: {
      value: `Some text written`,
    },
  });

  addPostForm.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    title: `Written title`,
    userId: 1,
    body: `Some text written`,
  });
});
