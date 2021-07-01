import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
  },
});

instance.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => Promise.reject(error)
);

export default instance;
