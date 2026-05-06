import { store } from "../store";

export function dashboardView() {
  return `
    <h2>Bienvenido ${store.user.email}</h2>
    <nav>
      <a href="#/profile">Perfil</a>
      <button onclick="logout()">Salir</button>
    </nav>
  `;
}

window.logout = () => {
  store.logout();
  location.hash = "/";
};
