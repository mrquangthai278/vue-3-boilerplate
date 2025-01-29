import axios, { type AxiosInstance } from 'axios';

import { env } from './env';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: env.APP_BASE_PATH,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return the response as-is
  },
  async (error) => {
    const res: ErrorResponse = error?.response?.data;
    const originalRequestConfig = error.config;

    // Reject all other errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
