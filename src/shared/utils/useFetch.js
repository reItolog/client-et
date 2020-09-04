import axios from 'axios';
import { storageService } from '../services/localstorage.service';

export const useFetch = (url, data, method = 'get') => {
  const token = storageService.getAuthToken();
  const headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios({
    method,
    url,
    data,
    headers,
  });
};
