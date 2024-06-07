export const localStorageService = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  get: (key) => {
    if (key === "colorMode") {
      return localStorage.getItem(key);
    }
    return JSON.parse(localStorage.getItem(key));
  },
};
