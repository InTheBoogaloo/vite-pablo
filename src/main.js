import { router } from "./router";
import  "../style.css"
function render() {
  document.getElementById("app").innerHTML = router();
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
