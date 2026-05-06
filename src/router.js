import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { dashboardView } from "./views/dashboard.js";
import { profileView } from "./views/profile.js";
import { store } from "./store.js";

export function router() {
  const path = location.hash.slice(1) || "/";

  if (!store.user && path !== "/register") {
    return loginView();
  }

  switch (path) {
    case "/":
      return dashboardView();
    case "/register":
      return registerView();
    case "/profile":
      return profileView();
    default:
      return "<h1>404</h1>";
  }
}
