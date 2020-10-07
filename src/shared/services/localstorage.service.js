class LocalstorageService {
  user = 'user';
  logged = 'logged';

  getUser() {
    return JSON.parse(localStorage.getItem(this.user));
  }

  setUser(user) {
    return localStorage.setItem(this.user, JSON.stringify(user));
  }

  removeUser() {
    return localStorage.removeItem(this.user);
  }

  setLogged(logged) {
    return localStorage.setItem(this.logged, logged);
  }

  getLogged() {
    return localStorage.getItem(this.logged);
  }
}

export const storageService = new LocalstorageService();
