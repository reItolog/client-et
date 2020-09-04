class LocalstorageService {
  token = 'token';

  getAuthToken() {
    return localStorage.getItem(this.token);
  }

  setAuthToken(token) {
    return localStorage.setItem(this.token, token);
  }

  removeAuthToken() {
    return localStorage.removeItem(this.token);
  }
}

export const storageService = new LocalstorageService();
