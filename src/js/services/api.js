import axios from 'axios';
import {HttpCode} from '../utils/const';

const BASE_URL = `https://jsonplaceholder.typicode.com`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onError, onServerError) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    const {response} = err;

    if (response) {
      switch (response.status) {
        case HttpCode.SERVER_ERROR:
          onServerError();
          break;
        case HttpCode.BAD_REQUEST:
          onError(response.status);
          break;
      }
      throw err;
    }
    throw err.message;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
