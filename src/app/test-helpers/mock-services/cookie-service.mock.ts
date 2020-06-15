export class CookieServiceMock {
  public cookie: any = {
    isLoggedIn: {
      username: 'username'
    }
  };

  constructor() {}

  check(path: string) {
    return !!this.cookie[path];
  }

  set(key: string, value: string) {
    this.cookie[key] = value;
  }

  get(key: string) {
    return this.cookie[key];
  }

  delete(key: string) {
    delete this.cookie[key];
  }

  deleteAll(path: string, domain: string) {
    this.cookie = {};
  }
}
