import axios from 'axios';
import { storageService } from '../services/localstorage.service';

export const useFetch = async (url, payload, method = 'get') => {
  const user = storageService.getUser();
  const headers = {};

  if (user && user.token) {
    headers.Authorization = `Bearer ${user.token}`;
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
