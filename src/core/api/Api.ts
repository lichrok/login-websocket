import axios, {AxiosRequestConfig} from 'axios';

const BASE_URL = 'https://work.vint-x.net/api';

const Api = (url: string, options: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  let authorization = {};

  if (!!token) {
    authorization = { 'x-test-app-jwt-token': token }
  }

  return axios({
    url,
    baseURL: BASE_URL,
    headers: {
      ...authorization
    },
    ...options
  })
}

export default Api;
