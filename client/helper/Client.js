import axios from 'axios';
import Raven from 'raven-js';
import store from '../store/index';

const getClient = (baseUrl = `http://localhost:8081`) => {

  const options = {
    baseURL: baseUrl
  };

  // if (store.getters['users/isAuthenticated']) {
  //   options.headers = {
  //     Authorization: `Bearer ${store.getters['users/accessToken']}`,
  //   };
  // }

  const client = axios.create(options);

  // Add a request interceptor
  client.interceptors.request.use(
    requestConfig => requestConfig,
    (requestError) => {
      Raven.captureException(requestError);

      return Promise.reject(requestError);
    },
  );

  // Add a response interceptor
  client.interceptors.response.use(
    response => response,
    (error) => {
      if (error.response.status >= 500) {
        Raven.captureException(error);
      }

      return Promise.reject(error);
    },
  );

  return client;
};

export default getClient;
