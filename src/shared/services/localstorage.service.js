class LocalstorageService {
  user = 'user';
  verified = 'verified';

  getUser() {
    return JSON.parse(localStorage.getItem(this.user));
  }

  setUser(user) {
    return localStorage.setItem(this.user, JSON.stringify(user));
  }

  removeUser() {
    return localStorage.removeItem(this.user);
  }
}

export const storageService = new LocalstorageService();
