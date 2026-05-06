export function registerView() {
  return `
    <h2>Registro</h2>
    <input id="email" placeholder="Email"/>
    <input id="password" type="password" placeholder="Password"/>
    <button onclick="register()">Crear cuenta</button>
    <p><a href="#/">Login</a></p>
  `;
}

window.register = () => {
  alert("Usuario registrado (simulado)");
  location.hash = "/";
};
