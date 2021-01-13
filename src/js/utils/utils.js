import {BodySettings} from './const';

export const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getBody = (body) => body.length > BodySettings.MAX_LENGTH ? `${body.substring(BodySettings.MIN_LENGTH, BodySettings.MAX_LENGTH)}...` : body;

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const validateText = (text) => {
  return text.length >= 2;
};

export const hideVisually = () => {
  return {
    border: `0`,
    clip: `rect(0 0 0 0)`,
    clipPath: `inset(50%)`,
    height: `1px`,
    margin: `-1px`,
    overflow: `hidden`,
    padding: `0`,
    position: `absolute`,
    whiteSpace: `nowrap`,
    width: `1px`,
  };
};
