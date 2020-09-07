import axios from 'axios';
import { storageService } from '../services/localstorage.service';

export const useFetch = async (url, payload, method = 'get') => {
  const token = storageService.getAuthToken();
  const headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const { data } = await axios({
      method,
      url,
      data: payload,
      headers,
    });

    return { data: data.data, error: data.error };
  } catch (error) {
    return { data: null, error };
  }
};
