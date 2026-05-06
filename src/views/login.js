import { store } from "../store";

export function loginView() {
  return `
    <h2>Login</h2>
    <input id="email" placeholder="Email"/>
    <input id="password" type="password" placeholder="Password"/>
    <button onclick="login()">Ingresar</button>
    <p><a href="#/register">Registrarse</a></p>
  `;
}

window.login = () => {
  const email = document.getElementById("email").value;

  store.login({ email });
  location.hash = "/";
};
