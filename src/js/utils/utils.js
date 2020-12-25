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
