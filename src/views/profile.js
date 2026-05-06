import { store } from "../store";

export function profileView() {
  return `
    <h2>Perfil</h2>
    <input id="email" value="${store.user.email}" />
    <button onclick="save()">Guardar</button>
    <br/>
    <a href="#/">Volver</a>
  `;
}

window.save = () => {
  const email = document.getElementById("email").value;
  store.updateProfile({ email });
  alert("Perfil actualizado");
  location.hash = "/";
};
