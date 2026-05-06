export const store = {
  user: JSON.parse(localStorage.getItem("user")) || null,

  login(user) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },

  logout() {
    this.user = null;
    localStorage.removeItem("user");
  },

  updateProfile(data) {
    this.user = { ...this.user, ...data };
    localStorage.setItem("user", JSON.stringify(this.user));
  }
};
