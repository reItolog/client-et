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

  setVerified() {
    return localStorage.setItem(this.verified, true);
  }

  getVerified() {
    return localStorage.getItem(this.verified);
  }

  removeVerified() {
    return localStorage.removeItem(this.verified);
  }
}

export const storageService = new LocalstorageService();
