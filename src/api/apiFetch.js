import axios from 'axios';
import { storageService } from '../shared/services/localstorage.service';
import config from '../shared/config/config.json';

export const apiFetch = async (url, payload, method = 'get') => {
  const user = storageService.getUser();
  const headers = {};

  if (user && user.token) {
    headers.Authorization = `Bearer ${user.token}`;
  }

  try {
    const { data } = await axios({
      baseURL: config.baseApiUrl,
      method,
      url,
      data: payload,
      headers,
    });

    return { data: data.data, error: data.error };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
