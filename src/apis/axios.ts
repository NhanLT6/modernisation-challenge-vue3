/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Create a new instance of Axios with a base URL
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Add request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Do something before sending the request
    return config;
  },
  (error: any) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Do something with the response data
    return response;
  },
  (error: any) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
