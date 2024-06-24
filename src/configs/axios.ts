import axios from 'axios';
import { API_PREFIX } from './common';

const axiosInstance = axios.create({
  baseURL: API_PREFIX,
});

axiosInstance.interceptors.response.use((response) => {
  if (response.data) return response.data;

  return response;
});

export default axiosInstance;
